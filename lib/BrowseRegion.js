import * as state from "../store";

import { render } from "../index";

import { patientPortal } from "./PatientPortal";
import { patientSkejit } from "./PatientSkejit";
import { patientViewDoc } from "./PatientViewDoc";

export function browseRegion() {
  render(state.BrowseRegion);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
  document
    .querySelector(".patientSkejit")
    .addEventListener("click", patientSkejit);
  document
    .querySelector(".patientViewDoc")
    .addEventListener("click", patientViewDoc);
}
