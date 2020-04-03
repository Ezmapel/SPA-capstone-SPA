import * as state from "../store";

import { render } from "../index";

import { patientViewDocGuest } from "./PatientViewDocGuest";
import { createUserPatient } from "./CreateUserPatient";

export function searchResultsGuest() {
  render(state.SearchResultsGuest);
  document
    .querySelector(".patientViewDocGuest")
    .addEventListener("click", patientViewDocGuest);
  document
    .querySelector(".createUserPatient")
    .addEventListener("click", createUserPatient);
}
