import * as state from "../store";

import { render } from "../index";

import { contactSubmitted } from "./ContactSubmitted";

import { home } from "./Home";
import { auth } from "../firebase";

export function about() {
  render(state.About);
  scrollTo(0, 0);
  document
    .querySelector(".contactSubmitted")
    .addEventListener("click", contactSubmitted);
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
