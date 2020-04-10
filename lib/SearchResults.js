import * as state from "../store";

import { render } from "../index";

import { patientPortal } from "./PatientPortal";
import { patientSkejit } from "./PatientSkejit";
import { patientViewDoc } from "./PatientViewDoc";
import { home } from "./Home";

import { realtime, db, auth } from "../firebase";

export function searchResults() {
  render(state.SearchResults);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
  document
    .querySelector(".patientSkejit")
    .addEventListener("click", patientSkejit);
  document
    .querySelector(".patientViewDoc")
    .addEventListener("click", patientViewDoc);
  document.querySelector("#userLoggedIn").addEventListener("click", logoutHome);
  console.log(state.SearchResults.results);

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
