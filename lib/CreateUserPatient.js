import * as state from "../store";

import { render } from "../index";

import { db, auth } from "../firebase";

import { patientPortal } from "./PatientPortal";
import { accountType } from "./AccountType";
import { home } from "./Home";

export function createUserPatient() {
  render(state.CreateUserPatient);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", addNewPatient);
  document.querySelector(".accountType").addEventListener("click", accountType);
  document.querySelector("#userLoggedIn").addEventListener("click", logoutHome);

  function logoutHome() {
    auth
      .signOut()
      .then(logOutButton.classList.add("logOutButtonHidden"))
      .then(home());
  }

  const logOutButton = document.querySelector("#userLoggedIn");

  if (state.Auth.loggedIn === "true") {
    logOutButton.innerHTML = "Log Out";
    logOutButton.classList.add("logOutButton");
  } else {
    logOutButton.innerHTML = "";
    logOutButton.classList.add("logOutButtonHidden");
  }
}

function addNewPatient() {
  const email = document.querySelector("#newPatientEmail").value;
  const password = document.querySelector("#newPatientPassword").value;

  // auth.createUserWithEmailAndPassword(email, password).then(response => {
  //   console.log("user registered");
  //   console.log(response);
  //   console.log(response.user);
  // });

  auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    alert(errorCode);
    let errorMessage = error.message;
    alert(errorMessage);
    // ...
  });

  const patientEmail = document.querySelector("#newPatientEmail").value;
  const patientFirstName = document.querySelector("#patientFirstName").value;
  const patientLastName = document.querySelector("#patientLastName").value;

  db.collection("patients")
    .doc(patientEmail)
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        alert(
          "Looks like that email is already taken! Afraid you'll have to try something else :/"
        );
      } else {
        db.collection("patients").doc(patientEmail).set({
          user: "patient",
          email: patientEmail,
          firstName: patientFirstName,
          lastName: patientLastName,
        }),
          patientPortal();
      }
    });
}
