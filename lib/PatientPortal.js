import * as state from "../store";

import { render } from "../index";

import { searchResults } from "./SearchResults";
import { patientBookings } from "./PatientBookings";

export function patientPortal() {
  render(state.PatientPortal);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientBookings")
    .addEventListener("click", patientBookings);
}
