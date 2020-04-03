import * as state from "../store";

import { render } from "../index";

import { searchResults } from "./SearchResults";
import { patientSkejit } from "./PatientSkejit";

export function patientViewDoc() {
  render(state.PatientViewDoc);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientSkejit")
    .addEventListener("click", patientSkejit);
}
