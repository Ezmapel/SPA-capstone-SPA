import * as state from "../store";

import { render } from "../index";

import { searchResultsGuest } from "./SearchResultsGuest";
import { createUserPatient } from "./CreateUserPatient";

import { home } from "./Home";
import { auth } from "../firebase";

export function patientViewDocGuest() {
  render(state.PatientViewDocGuest);
  document
    .querySelector(".searchResultsGuest")
    .addEventListener("click", searchResultsGuest);
  document
    .querySelector(".createUserPatient")
    .addEventListener("click", createUserPatient);
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
