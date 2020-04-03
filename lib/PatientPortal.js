import * as state from "../store";

import { render } from "../index";

import { createPatientProfile } from "./CreatePatientProfile";
import { searchResults } from "./SearchResults";
import { patientBookings } from "./PatientBookings";

export function patientPortal() {
  render(state.PatientPortal);
  document
    .querySelector(".createPatientProfile")
    .addEventListener("click", createPatientProfile);
  // document
  //   .querySelector(".browseRegion")
  //   .addEventListener("click", browseRegion);
  // document.querySelector(".browseType").addEventListener("click", browseType);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientBookings")
    .addEventListener("click", patientBookings);
}
