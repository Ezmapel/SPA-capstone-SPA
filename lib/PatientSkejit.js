import * as state from "../store";

import { render } from "../index";

import { searchResults } from "./SearchResults";
import { patientConfirmation } from "./PatientConfirmation";

export function patientSkejit() {
  render(state.PatientSkejit);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientConfirmation")
    .addEventListener("click", patientConfirmation);
}
