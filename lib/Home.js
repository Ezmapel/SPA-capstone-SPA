import * as state from "../store";

import { render } from "../index";

import { db, auth } from "../firebase";

import { searchResultsGuest } from "./SearchResultsGuest";
import { accountType } from "./AccountType";
import { docPortal } from "./DocPortal";
import { patientPortal } from "./PatientPortal";

export function home() {
  render(state.Home);
  document.querySelector("#loginHome").addEventListener("click", loginHome);
  document
    .querySelector(".accountType")
    .addEventListener("click", accountType /*putInObj*/);
  document
    .querySelector(".searchResultsGuest")
    .addEventListener("click", searchResultsGuest);
  document.querySelector("#logoutHome").addEventListener("click", logoutHome);
  // authListener();
}

function loginHome() {
  console.log("clicked");

  let email = document.querySelector("#user").value;
  let password = document.querySelector("#pass").value;

  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    alert(errorCode);
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });

  // auth.onAuthStateChanged(user => (user ? console.log(user) : ""));

  // auth.onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     console.log("That's a User");
  //     // var displayName = user.displayName;
  //     // var email = user.email;
  //     // var emailVerified = user.emailVerified;
  //     // var photoURL = user.photoURL;
  //     // var isAnonymous = user.isAnonymous;
  //     // var uid = user.uid;
  //     // var providerData = user.providerData;
  //     // ...
  //   } else {
  //     // User is signed out.
  //     console.log("Nope");
  //     // ...
  //   }
  // });
}

function logoutHome() {
  auth.signOut();
}

// function putInObj() {
//   let myObject = { username: "", password: "" };
//   myObject.username = document.querySelector("#user").value;
//   myObject.password = document.querySelector("#pass").value;

//   console.log("function ran");

//   const coll = db.collection("users");

//   coll.doc("doctors").update({ firstName: myObject.username });

// accountType();
// }

// function authListener() {
//   auth.onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       console.log("That's a User");
//       // var displayName = user.displayName;
//       // var email = user.email;
//       // var emailVerified = user.emailVerified;
//       // var photoURL = user.photoURL;
//       // var isAnonymous = user.isAnonymous;
//       // var uid = user.uid;
//       // var providerData = user.providerData;
//       // ...
//     } else {
//       // User is signed out.
//       console.log("Nope");
//       // ...
//     }
//   });
// }
