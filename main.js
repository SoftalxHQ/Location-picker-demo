import {
  getCountries,
  getLgas,
  getStates,
  getTowns,
} from "@softalxhq/location-selector";

const countryEl = document.querySelector("#country");
const stateEl = document.querySelector("#state");
const lgaEl = document.querySelector("#lga");
const townEl = document.querySelector("#town");
const outputEl = document.querySelector("#output");
const labelState = document.querySelector("#label-state");
const labelLga = document.querySelector("#label-lga");

const LABELS = {
  NG: { state: "State", lga: "LGA" },
  GH: { state: "Region", lga: "District" },
};

function fillSelect(select, values, placeholder) {
  select.innerHTML = "";
  const first = document.createElement("option");
  first.value = "";
  first.textContent = placeholder;
  select.append(first);

  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  }

  select.disabled = values.length === 0;
  select.value = "";
}

function updateLabels(countryCode) {
  const labels = LABELS[countryCode] ?? {
    state: "State / Region",
    lga: "LGA / District",
  };
  labelState.textContent = labels.state;
  labelLga.textContent = labels.lga;
}

function renderOutput() {
  const country = countryEl.value;
  const state = stateEl.value;
  const lga = lgaEl.value;
  const town = townEl.value;

  if (!country) {
    outputEl.textContent = "Choose a country to begin.";
    return;
  }

  outputEl.textContent = JSON.stringify(
    {
      country,
      state: state || null,
      lga: lga || null,
      town: town || null,
      counts: {
        states: getStates(country).length,
        lgas: state ? getLgas(country, state).length : 0,
        towns: state && lga ? getTowns(country, state, lga).length : 0,
      },
    },
    null,
    2,
  );
}

function onCountryChange() {
  const code = countryEl.value;
  updateLabels(code);
  fillSelect(
    stateEl,
    code ? getStates(code).map((s) => s.name) : [],
    `Select ${labelState.textContent.toLowerCase()}`,
  );
  fillSelect(lgaEl, [], `Select ${labelLga.textContent.toLowerCase()}`);
  fillSelect(townEl, [], "Select town");
  lgaEl.disabled = true;
  townEl.disabled = true;
  renderOutput();
}

function onStateChange() {
  const code = countryEl.value;
  const state = stateEl.value;
  fillSelect(
    lgaEl,
    code && state ? getLgas(code, state).map((d) => d.name) : [],
    `Select ${labelLga.textContent.toLowerCase()}`,
  );
  fillSelect(townEl, [], "Select town");
  townEl.disabled = true;
  renderOutput();
}

function onLgaChange() {
  const code = countryEl.value;
  const state = stateEl.value;
  const lga = lgaEl.value;
  fillSelect(
    townEl,
    code && state && lga ? getTowns(code, state, lga) : [],
    "Select town",
  );
  renderOutput();
}

countryEl.innerHTML = "";
{
  const first = document.createElement("option");
  first.value = "";
  first.textContent = "Select country";
  countryEl.append(first);
  for (const c of getCountries()) {
    const option = document.createElement("option");
    option.value = c.code;
    option.textContent = `${c.name} (${c.code})`;
    countryEl.append(option);
  }
}

fillSelect(stateEl, [], "Select state / region");
fillSelect(lgaEl, [], "Select LGA / district");
fillSelect(townEl, [], "Select town");
stateEl.disabled = true;
lgaEl.disabled = true;
townEl.disabled = true;

countryEl.addEventListener("change", onCountryChange);
stateEl.addEventListener("change", onStateChange);
lgaEl.addEventListener("change", onLgaChange);
townEl.addEventListener("change", renderOutput);
