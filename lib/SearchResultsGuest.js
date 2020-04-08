import * as state from "../store";

import { render } from "../index";

import { home } from "./Home";
import { patientViewDocGuest } from "./PatientViewDocGuest";
import { createUserPatient } from "./CreateUserPatient";

import { auth } from "../firebase";

export function searchResultsGuest() {
  render(state.SearchResultsGuest);
  document
    .querySelector(".patientViewDocGuest")
    .addEventListener("click", patientViewDocGuest);
  document
    .querySelector(".createUserPatient")
    .addEventListener("click", createUserPatient);
  document.querySelector(".home").addEventListener("click", home);
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
