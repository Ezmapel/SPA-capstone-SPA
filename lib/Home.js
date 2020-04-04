import * as state from "../store";

import { render } from "../index";

import { db } from "../firebase";

import { searchResultsGuest } from "./SearchResultsGuest";
import { accountType } from "./AccountType";

export function home() {
  render(state.Home);
  document
    .querySelector(".accountType")
    .addEventListener("click", putInObj /*accountType*/);
  document
    .querySelector(".searchResultsGuest")
    .addEventListener("click", searchResultsGuest);
}

function putInObj() {
  let myObject = { username: "", password: "" };
  myObject.username = document.querySelector("#user").value;
  myObject.password = document.querySelector("#pass").value;

  console.log(myObject);

  const coll = db.collection("users");

  coll.doc("doctors").update({ firstName: myObject.username });

  accountType();
}
