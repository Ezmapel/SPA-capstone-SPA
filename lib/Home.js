import * as state from "../store";

import { render } from "../index";

import { db, auth } from "../firebase";

import { searchResultsGuest } from "./SearchResultsGuest";
import { accountType } from "./AccountType";
import { docPortal } from "./DocPortal";
import { patientPortal } from "./PatientPortal";

export function home() {
  render(state.Home);
  scrollTo(0, 0);
  document.querySelector("#loginHome").addEventListener("click", loginHome);
  document.querySelector(".accountType").addEventListener("click", accountType);
  document
    .querySelector(".searchResultsGuest")
    .addEventListener("click", searchResultsGuest);
  document.querySelector("#userLoggedIn").addEventListener("click", logoutHome);

  function logoutHome() {
    auth
      .signOut()
      .then(logOutButton.classList.add("logOutButtonHidden"))
      // .then(db.collection("patients").doc(email).update("false"))
      .then(home());
  }

  const logOutButton = document.querySelector("#userLoggedIn");

  if (state.Auth.loggedIn === "true") {
    // reach out and check doc or patient

    logOutButton.innerHTML = "Log Out";
    logOutButton.classList.add("logOutButton");
  } else {
    logOutButton.innerHTML = "";
    logOutButton.classList.add("logOutButtonHidden");
  }
}

function loginHome() {
  console.log("clicked");

  let email = document.querySelector("#user").value;
  let password = document.querySelector("#pass").value;

  auth.signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    alert(errorCode);
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });

  db.collection("patients")
    .doc(email)
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        patientPortal();
        db.collection("patients").doc(email).update("true");
      }
    });

  db.collection("doctors")
    .doc(email)
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        docPortal();
      }
    });
}
