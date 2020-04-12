import * as state from "../store";

import { render } from "../index";

import { patientViewDoc } from "./PatientViewDoc";
import { patientConfirmation } from "./PatientConfirmation";

import { home } from "./Home";
import { auth, realtime } from "../firebase";

export function patientSkejit() {
  render(state.PatientSkejit);
  const skejitConfReject = document.querySelectorAll(".patientViewDoc");
  for (const skejitConf of skejitConfReject) {
    skejitConf.addEventListener("click", rejectSkejit);
  }
  // document
  //   .querySelectorAll(".patientViewDoc")
  //   .addEventListener("click", patientViewDoc);
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

  // One

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar1");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayOne").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";

        x[i].style.height = `${liveSize.dayOne[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";

        x[i].style.height = `${liveSize.dayOne[i] * 50}px`;
      }
    }
  });

  // Two

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar2");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayTwo").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";

        x[i].style.height = `${liveSize.dayTwo[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";

        x[i].style.height = `${liveSize.dayTwo[i] * 50}px`;
      }
    }
  });

  // Three

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar3");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayThree").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";

        x[i].style.height = `${liveSize.dayThree[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";

        x[i].style.height = `${liveSize.dayThree[i] * 50}px`;
      }
    }
  });

  // Four

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar4");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayFour").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";

        x[i].style.height = `${liveSize.dayFour[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";

        x[i].style.height = `${liveSize.dayFour[i] * 50}px`;
      }
    }
  });

  // Five

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar5");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayFive").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";

        x[i].style.height = `${liveSize.dayFive[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";

        x[i].style.height = `${liveSize.dayFive[i] * 50}px`;
      }
    }
  });

  function rejectSkejit() {
    // console.log(this.id);
    // console.log(this.value);

    //   let firstName = state.DocSched.docUserData.firstName;
    //   let lastName = state.DocSched.docUserData.lastName;

    let firstName = state.PatientViewDoc.specificDocDetails[0].firstName;
    let lastName = state.PatientViewDoc.specificDocDetails[0].lastName;
    console.log(firstName, lastName);

    // state.PatientSkejit.appointment = this.id;
    // console.log("SKEJ", state.PatientSkejit.appointment);

    // state.PatientSkejit.appointment;
    let rejectedDay = state.PatientSkejit.day;
    let rejectedSlot = state.PatientSkejit.slot;
    console.log(rejectedDay);
    console.log(rejectedSlot);

    //   // Day 1

    const skejitReject = realtime
      .ref("doctors/" + lastName + firstName)
      .child("availability")
      .child(rejectedDay)
      .child(rejectedSlot);

    skejitReject.once("value", (snap) => {
      if (snap.val() === "true") {
        // console.log("Book this:", snap.val());
        console.log("there seems to have been an error");
        patientViewDoc();
      } else {
        skejitReject.set("true");
        patientViewDoc();
        // skejitDayOne.set("true");
      }
    });

    // patientViewDoc();
  }
}
