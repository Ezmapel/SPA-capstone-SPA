import * as state from "../store";

import { render } from "../index";

import { docSched } from "./DocSched";
import { docNotifications } from "./DocNotifications";
import { docBookings } from "./DocBookings";
import { createDocProfile } from "./CreateDocProfile";

import { home } from "./Home";
import { auth } from "../firebase";

export function docPortal() {
  render(state.DocPortal);
  document.querySelector(".docSched").addEventListener("click", docSched);
  document
    .querySelector(".docNotifications")
    .addEventListener("click", docNotifications);
  document.querySelector(".docBookings").addEventListener("click", docBookings);
  document
    .querySelector(".createDocProfile")
    .addEventListener("click", createDocProfile);
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
