import * as state from "../store";

import { render } from "../index";

import { docPortal } from "./DocPortal";

import { home } from "./Home";
import { auth, db } from "../firebase";

export function createDocProfile() {
  let docUserEmail = state.Auth.username;

  // if (state.Auth.loggedIn === "true") {
  //   db.collection("doctors")
  //     .doc(docUserEmail)
  //     .get()
  //     .then(function (doc) {
  //       if (doc.exists) {
  //         console.log("Document data", doc.data());
  //         state.CreateDocProfile.docUserData = doc.data();
  //       } else console.log("This data does not exist");
  //     });
  //   setTimeout(renderPage, 1500);
  //   // .then(renderPage());
  // } else renderPage();

  renderPage();

  // if (document.querySelector("#firstNameValue").value === null) {
  //   console.log("undefined page");
  // }

  function renderPage() {
    render(state.CreateDocProfile);
    document
      .querySelector("#saveDocData")
      .addEventListener("click", saveDocData);
    document
      .querySelector("#userLoggedIn")
      .addEventListener("click", logoutHome);
  }

  function saveDocData() {
    db.collection("doctors")
      .doc(docUserEmail)
      .update({
        specialty: document.querySelector("#specialtyValue").value,
        sex: document.querySelector("#sexValue").value,
        age: document.querySelector("#ageValue").value,
        city: document.querySelector("#cityValue").value,
        state: document.querySelector("#stateValue").value,
        bio: document.querySelector("#bioValue").value,
        education: document.querySelector("#educationValue").value,
        specialties: document.querySelector("#specialtiesValue").value,
        insurance: document.querySelector("#insuranceValue").value,
        officeName: document.querySelector("#officeNameValue").value,
        address: document.querySelector("#addressValue").value,
        phone: document.querySelector("#phoneValue").value,
        accepting: document.querySelector("#acceptingValue").value,
      });

    docPortal();
  }

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
