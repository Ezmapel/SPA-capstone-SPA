import * as state from "../store";

import { render } from "../index";

import { patientViewDoc } from "./PatientViewDoc";
import { patientConfirmation } from "./PatientConfirmation";

import { home } from "./Home";
import { auth, realtime } from "../firebase";

export function patientSkejit() {
  render(state.PatientSkejit);
  document
    .querySelector(".searchResults")
    .addEventListener("click", patientViewDoc);
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

  let firstName = state.PatientViewDoc.specificDocDetails[0].firstName;
  let lastName = state.PatientViewDoc.specificDocDetails[0].lastName;
  console.log("First", firstName, "Last", lastName);

  const sizeObject = realtime.ref("doctors/" + lastName + firstName);

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar1");

    let liveChange = snap.val();

    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "lightblue";

      x[i].style.height = `${liveChange.dayOne[i] * 50}px`;
    }
  });

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar2");

    let liveChange = snap.val();

    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "lightblue";

      x[i].style.height = `${liveChange.dayTwo[i] * 50}px`;
    }
  });

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar3");

    let liveChange = snap.val();

    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "lightblue";

      x[i].style.height = `${liveChange.dayThree[i] * 50}px`;
    }
  });

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar4");

    let liveChange = snap.val();

    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "lightblue";

      x[i].style.height = `${liveChange.dayFour[i] * 50}px`;
    }
  });

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar5");

    let liveChange = snap.val();

    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "lightblue";

      x[i].style.height = `${liveChange.dayFive[i] * 50}px`;
    }
  });
}
