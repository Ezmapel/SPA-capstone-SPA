import * as state from "../store";

import { render } from "../index";

import { searchResults } from "./SearchResults";
import { patientBookings } from "./PatientBookings";

import { home } from "./Home";
import { auth } from "../firebase";

export function patientPortal() {
  render(state.PatientPortal);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientBookings")
    .addEventListener("click", patientBookings);
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
