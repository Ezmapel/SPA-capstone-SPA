import * as state from "../store";

import { render } from "../index";

import { searchResults } from "./SearchResults";
import { patientBookings } from "./PatientBookings";
import { patientPortal } from "./PatientPortal";

export function patientConfirmation() {
  render(state.PatientConfirmation);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientBookings")
    .addEventListener("click", patientBookings);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
}
