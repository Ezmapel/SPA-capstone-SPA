import * as state from "../store";

import { render } from "../index";

import { createPatientProfile } from "./CreatePatientProfile";
import { accountType } from "./AccountType";

export function createUserPatient() {
  render(state.CreateUserPatient);
  document
    .querySelector(".createPatientProfile")
    .addEventListener("click", createPatientProfile);
  document.querySelector(".accountType").addEventListener("click", accountType);
}
