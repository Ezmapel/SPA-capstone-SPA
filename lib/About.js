import * as state from "../store";

import { render } from "../index";

import { contactSubmitted } from "./ContactSubmitted";

import { home } from "./Home";
import { auth, db } from "../firebase";

export function about() {
  render(state.About);
  scrollTo(0, 0);
  document
    .querySelector(".contactSubmitted")
    .addEventListener("click", submitContactForm);
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

function submitContactForm() {
  const contactFirstName = document.querySelector("#contactFirst").value;
  const contactLastName = document.querySelector("#contactLast").value;
  const contactEmail = document.querySelector("#contactEmail").value;
  const contactPhone = document.querySelector("#contactPhone").value;
  const contactComment = document.querySelector("#contactComment").value;

  // console.log("first", contactFirstName);
  // console.log("last", contactLastName);
  // console.log("email", contactEmail);
  // console.log("phone", contactPhone);
  // console.log("comment", contactComment);

  let newDate = new Date();

  db
    .collection("comments")
    .doc(contactLastName + contactFirstName + " " + newDate)
    .set({
      firstName: contactFirstName,
      lastName: contactLastName,
      email: contactEmail,
      phone: contactPhone,
      comment: contactComment,
    }),
    contactSubmitted();
}
