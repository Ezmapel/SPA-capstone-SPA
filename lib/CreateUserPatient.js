import * as state from "../store";

import { render } from "../index";

import { patientPortal } from "./PatientPortal";
import { accountType } from "./AccountType";

export function createUserPatient() {
  render(state.CreateUserPatient);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
  document.querySelector(".accountType").addEventListener("click", accountType);
}
