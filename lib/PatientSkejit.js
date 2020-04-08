import * as state from "../store";

import { render } from "../index";

import { searchResults } from "./SearchResults";
import { patientConfirmation } from "./PatientConfirmation";

import { home } from "./Home";
import { auth } from "../firebase";

export function patientSkejit() {
  render(state.PatientSkejit);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientConfirmation")
    .addEventListener("click", patientConfirmation);
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
