import * as state from "../store";

import { render } from "../index";

import { home } from "./Home";
import { patientViewDocGuest } from "./PatientViewDocGuest";
import { createUserPatient } from "./CreateUserPatient";

import { auth } from "../firebase";

export function searchResultsGuest() {
  render(state.SearchResultsGuest);
  scrollTo(0, 0);
  // document
  //   .querySelector(".patientViewDocGuest")
  //   .addEventListener("click", patientViewDocGuest);
  const buttonOne = document.querySelectorAll(".patientViewDocGuest");
  for (const button of buttonOne) {
    button.addEventListener("click", runPatientViewDocGuest);
  }
  // document
  //   .querySelector(".createUserPatient")
  //   .addEventListener("click", createUserPatient);
  document.querySelector(".home").addEventListener("click", home);
  const buttonTwo = document.querySelectorAll(".createUserPatient");
  for (const button of buttonTwo) {
    button.addEventListener("click", createUserPatient);
  }
  document.querySelector("#userLoggedIn").addEventListener("click", logoutHome);

  function runPatientViewDocGuest() {
    console.log(this.id);
    state.PatientViewDocGuest.specificDocEmail = this.id;
    state.PatientViewDocGuest.specificDocDetails = state.SearchResultsGuest.results.filter(
      function (item) {
        return item.email == state.PatientViewDocGuest.specificDocEmail;
      }
    );
    console.log(
      "specificDocDetails",
      state.PatientViewDocGuest.specificDocDetails
    );
    console.log("specificDocEmail", state.PatientViewDocGuest.specificDocEmail);

    // let wantedDoc = state.SearchResults.results.filter(function (item) {
    //   return item.email == state.PatientViewDoc.specificDoc;
    // });

    // console.log("wantedDoc", wantedDoc);

    // replyClick();

    // function replyClick(this.id) {
    //   alert(clicked_id);
    // }
    // const buttonThree = document.getElementsByClassName("specificDocHidden");
    // for (const button of buttonThree) {
    //   // console.log(button.innerHTML);
    //   console.log(button);
    //   // state.PatientViewDoc.specificDoc = button.innerHTML;
    //   // console.log(state.PatientViewDoc.specificDoc);
    // }
    // ${st.results.map((result) => formatResults(result)).join("")}
    // let specificDoctor = document.querySelector(".specificDocHidden").innerHTML;
    // state.PatientViewDoc.specificDoc = specificDoctor;
    // console.log(state.PatientViewDoc.specificDoc);
    patientViewDocGuest();
  }

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
