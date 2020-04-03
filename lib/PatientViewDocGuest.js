import * as state from "../store";

import { render } from "../index";

import { searchResultsGuest } from "./SearchResultsGuest";
import { createUserPatient } from "./CreateUserPatient";

export function patientViewDocGuest() {
  render(state.PatientViewDocGuest);
  document
    .querySelector(".searchResultsGuest")
    .addEventListener("click", searchResultsGuest);
  document
    .querySelector(".createUserPatient")
    .addEventListener("click", createUserPatient);
}
