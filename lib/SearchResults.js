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
  const buttonOne = document.querySelectorAll(".patientSkejit");
  for (const button of buttonOne) {
    button.addEventListener("click", patientSkejit);
  }
  // document
  //   .querySelector(".patientSkejit")
  //   .addEventListener("click", patientSkejit);
  const buttonTwo = document.querySelectorAll(".patientViewDoc");
  for (const button of buttonTwo) {
    button.addEventListener("click", runPatientViewDoc);
  }
  // document
  //   .querySelector(".patientViewDoc")
  //   .addEventListener("click", runPatientViewDoc);
  document.querySelector("#userLoggedIn").addEventListener("click", logoutHome);
  console.log(state.SearchResults.results);

  function runPatientViewDoc() {
    console.log(this.id);
    state.PatientViewDoc.specificDoc = this.id;
    state.PatientViewDoc.specificDocDetails = state.SearchResults.results.filter(
      function (item) {
        return item.email == state.PatientViewDoc.specificDoc;
      }
    );
    console.log("DETAILS", state.PatientViewDoc.specificDocDetails);

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
    patientViewDoc();
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
