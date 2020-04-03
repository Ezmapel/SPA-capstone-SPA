import * as state from "../store";

import { render } from "../index";

import { createDocProfile } from "./CreateDocProfile";
import { accountType } from "./AccountType";

import { db } from "../firebase";

export function createUserDoc() {
  render(state.CreateUserDoc);
  document
    .querySelector(".createDocProfile")
    .addEventListener("click", testInput);
  document.querySelector(".accountType").addEventListener("click", accountType);
}

function testInput() {
  let testData = document.querySelector(".nameName").value;

  console.log(testData);

  const coll = db.collection("users");

  coll.doc("doctors").update({ firstName: testData });

  createDocProfile();
}
