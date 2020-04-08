import * as state from "../store";

import { render } from "../index";

import { docPortal } from "./DocPortal";

import { home } from "./Home";
import { auth } from "../firebase";

export function docBookings() {
  render(state.DocBookings);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
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
