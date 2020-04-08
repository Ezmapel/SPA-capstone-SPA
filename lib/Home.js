import * as state from "../store";

import { render } from "../index";

import { db, auth } from "../firebase";

import { searchResultsGuest } from "./SearchResultsGuest";
import { accountType } from "./AccountType";

export function home() {
  render(state.Home);
  // document.querySelector("#loginHome").addEventListener("click", loginHome);
  document
    .querySelector(".accountType")
    .addEventListener("click", accountType /*putInObj*/);
  document
    .querySelector(".searchResultsGuest")
    .addEventListener("click", searchResultsGuest);
}

// function loginHome() {
//   let email = document.querySelector("#user").value;
//   let password = document.querySelector("#pass").value;

//   auth.signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     alert(errorCode);
//     var errorMessage = error.message;
//     alert(errorMessage);
//     // ...
//   });
// }

// function putInObj() {
//   let myObject = { username: "", password: "" };
//   myObject.username = document.querySelector("#user").value;
//   myObject.password = document.querySelector("#pass").value;

//   console.log("function ran");

//   const coll = db.collection("users");

//   coll.doc("doctors").update({ firstName: myObject.username });

// accountType();
// }
