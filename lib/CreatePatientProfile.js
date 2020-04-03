import * as state from "../store";

import { render } from "../index";

import { patientPortal } from "./PatientPortal";

export function createPatientProfile() {
  render(state.CreatePatientProfile);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
}
