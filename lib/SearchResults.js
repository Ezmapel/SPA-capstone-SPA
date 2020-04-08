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

  const dbRefObject = realtime.ref();

  // dbRefObject.on("value", snap => console.log(snap.val()));

  dbRefObject.on("value", snap => {
    let slotOne = snap.child("slotOne").val();
    let slotTwo = snap.child("slotTwo").val();
    let slotThree = snap.child("slotThree").val();

    if (slotOne === "true") {
      document.getElementById("slotOne").style.backgroundColor = "green";
      document.getElementById("slotOne").innerHTML = "Available";
    } else {
      document.getElementById("slotOne").style.backgroundColor = "gray";
      document.getElementById("slotOne").innerHTML = "Sorry";
    }
    if (slotTwo === "true") {
      document.getElementById("slotTwo").style.backgroundColor = "green";
      document.getElementById("slotTwo").innerHTML = "Available";
    } else {
      document.getElementById("slotTwo").style.backgroundColor = "gray";
      document.getElementById("slotTwo").innerHTML = "Sorry";
    }
    if (slotThree === "true") {
      document.getElementById("slotThree").style.backgroundColor = "green";
      document.getElementById("slotThree").innerHTML = "Available";
    } else {
      document.getElementById("slotThree").style.backgroundColor = "gray";
      document.getElementById("slotThree").innerHTML = "Sorry";
    }
  });
}
