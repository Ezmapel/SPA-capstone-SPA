import * as state from "../store";

import { render } from "../index";

import { createUserDoc } from "./CreateUserDoc";
import { createUserPatient } from "./CreateUserPatient";
import { home } from "./Home";

export function accountType() {
  render(state.AccountType);
  document
    .querySelector(".createUserDoc")
    .addEventListener("click", createUserDoc);
  document
    .querySelector(".createUserPatient")
    .addEventListener("click", createUserPatient);
  document.querySelector(".home").addEventListener("click", home);
}
