import * as state from "../store";

import { render } from "../index";

import { createDocProfile } from "./CreateDocProfile";
import { accountType } from "./AccountType";

export function createUserDoc() {
  render(state.CreateUserDoc);
  document
    .querySelector(".createDocProfile")
    .addEventListener("click", createDocProfile);
  document.querySelector(".accountType").addEventListener("click", accountType);
}
