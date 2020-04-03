import * as state from "../store";

import { render } from "../index";

import { patientPortal } from "./PatientPortal";

export function patientBookings() {
  render(state.PatientBookings);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
}
