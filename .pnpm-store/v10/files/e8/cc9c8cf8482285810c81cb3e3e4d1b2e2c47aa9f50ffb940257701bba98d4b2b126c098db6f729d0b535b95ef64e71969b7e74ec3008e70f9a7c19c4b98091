# @softalxhq/location-selector

[![Location selector demo](https://lsdemo.vercel.app/demo.jpg)](https://lsdemo.vercel.app/)

Framework-agnostic **country → state/region → LGA/district → town** location data for **Nigeria**, **Ghana**, **Kenya**, **South Africa**, **Egypt**, **Ethiopia**, **Tanzania**, **Uganda**, **Rwanda**, **Senegal**, **Morocco**, plus **United States** and **United Kingdom**.

JSON is the source of truth — use it from PHP, Python, Ruby on Rails, or any other language. TypeScript helpers are included for Node and browser apps.

## Live demo

Try the cascading picker in the browser: **[https://lsdemo.vercel.app/](https://lsdemo.vercel.app/)**

> Deploy tip: host `demo.jpg` at `https://lsdemo.vercel.app/demo.jpg` (e.g. put it in the demo app `public/` folder) so the README image loads on npm and in Markdown previews.

## Install

```bash
npm install @softalxhq/location-selector
pnpm add @softalxhq/location-selector
yarn add @softalxhq/location-selector
```

## Hierarchy

| Code | Country | `getStates` | `getLgas` | `getTowns` |
| --- | --- | --- | --- | --- |
| `NG` | Nigeria | State (37) | LGA | Town |
| `GH` | Ghana | Region (16) | District / MMDA | Town |
| `KE` | Kenya | County (47) | Sub-county | Ward |
| `ZA` | South Africa | Province (9) | Municipality | Ward |
| `EG` | Egypt | Governorate (27) | District | Shiyakha |
| `ET` | Ethiopia | Region / city admin | Zone | Woreda |
| `TZ` | Tanzania | Region (31) | District | Ward |
| `UG` | Uganda | Region (4) | District | Sub-county |
| `RW` | Rwanda | Province (5) | District | Sector |
| `SN` | Senegal | Region (14) | Department | Arrondissement |
| `MA` | Morocco | Region (10) | Province | Locality |
| `US` | United States | State (+ DC) | County / Parish | City / town |
| `GB` | United Kingdom | Country (4) | Local authority | Town / city |

## JavaScript / TypeScript

```ts
import {
  getCountries,
  getStates,
  getLgas,
  getTowns,
} from "@softalxhq/location-selector";

getCountries();
// NG, GH, US, GB, KE, ZA, EG, ET, TZ, UG, RW, SN, MA

getStates("ZA");
getLgas("ZA", "Gauteng");
getTowns("ZA", "Gauteng", "City of Johannesburg");

getStates("EG");
getLgas("EG", "Cairo");
```

Name matching is case-insensitive. Unknown country/state/LGA returns `[]`.

### Raw JSON (JS)

```ts
import za from "@softalxhq/location-selector/data/za.json";
import eg from "@softalxhq/location-selector/data/eg.json";
import countries from "@softalxhq/location-selector/data/countries.json";
```

Files also exist for `ng`, `gh`, `ke`, `et`, `tz`, `ug`, `rw`, `sn`, `ma`, `us`, `gb`.

## Data sources

African admin trees (GH, KE, ZA, EG, ET, TZ, UG, RW, SN, MA) are derived from [Open Admin Data](https://github.com/open-admin-data) country datasets (CC-BY-4.0), transformed into this package’s three-level schema.

- **ZA:** province → municipality → ward (district level omitted)
- **UG:** region → district → sub-county (counties flattened)

**United States:** Census counties gazetteer + [kelvins/US-Cities-Database](https://github.com/kelvins/US-Cities-Database).

**United Kingdom:** [mySociety local authorities](https://github.com/mysociety/uk_local_authority_names_and_codes) + [GeoNames](https://www.geonames.org/) GB places.

**Nigeria:** bundled state → LGA → town data.

## License

MIT. Upstream datasets retain their licenses (CC-BY-4.0 for Open Admin Data / GeoNames attribution; Census public domain; mySociety per their terms). Attribution above is required when redistributing derived data.
