import * as state from "../store";

import { render } from "../index";

import { home } from "./Home";
import { about } from "./About";
import { auth } from "../firebase";

export function contactSubmitted() {
  render(state.ContactSubmitted);
  scrollTo(0, 0);
  // const homeButton = document.querySelectorAll(".home");
  // for (const homeOne of homeButton) {
  //   homeOne.addEventListener("click", home);
  // }
  document.querySelector(".home").addEventListener("click", home);
  document.querySelector(".about").addEventListener("click", about);
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
