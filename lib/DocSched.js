import * as state from "../store";

import { render } from "../index";

import { realtime, auth, db } from "../firebase";

import { docPortal } from "./DocPortal";
import { docTimeSlots } from "./DocTimeSlots";

import { home } from "./Home";

export function docSched() {
  render(state.DocSched);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
  document
    .querySelector(".docTimeSlots")
    .addEventListener("click", docTimeSlots);
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

  resize();
}

function resize() {
  let docUserEmail = state.Auth.username;

  if (state.Auth.loggedIn === "true") {
    db.collection("doctors")
      .doc(docUserEmail)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Doc Sched data", doc.data());
          state.DocSched.docUserData = doc.data();
        } else console.log("This data does not exist");
      });
  }

  let firstName = state.DocSched.docUserData.firstName;
  let lastName = state.DocSched.docUserData.lastName;
  let fullName = lastName + firstName;

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

  // sizeObject.on("value", snap => {
  //   let slot1 = snap.child("slotOneGrid").val();
  //   let slot2 = snap.child("slotTwoGrid").val();
  //   let slot3 = snap.child("slotThreeGrid").val();
  //   let slot4 = snap.child("slotFourGrid").val();
  //   let slot5 = snap.child("slotFiveGrid").val();
  //   let slot6 = snap.child("slotSixGrid").val();

  //   console.log(slot1);

  // let slot1 = 200;
  // let slot2 = 40;
  // let slot3 = 10;
  // let slot4 = 5;
  // let slot5 = 20;
  // let slot6 = 5;

  // for (let i = 0; i < x.length; i++) {
  //   x[i].style.backgroundColor = "green";

  //   x[i].style.height = `${slot1}px`;

  //   console.log(`Hello ${slot1}`);
  // }

  // });
}

// function resize() {
//   const sizeObject = realtime.ref();

//   sizeObject.on("value", (snap) => {
//     let x = document.querySelectorAll(".calendar1");

//     let testDisplay = snap.val();

//     for (let i = 0; i < x.length; i++) {
//       x[i].style.backgroundColor = "lightblue";

//       x[i].style.height = `${testDisplay.slots.columnOne[i] * 5}px`;
//     }
//   });

//   sizeObject.on("value", (snap) => {
//     let x = document.querySelectorAll(".calendar2");

//     let testDisplay = snap.val();

//     for (let i = 0; i < x.length; i++) {
//       x[i].style.backgroundColor = "lightblue";

//       x[i].style.height = `${testDisplay.slots.columnTwo[i] * 5}px`;
//     }
//   });

//   // sizeObject.on("value", snap => {
//   //   let slot1 = snap.child("slotOneGrid").val();
//   //   let slot2 = snap.child("slotTwoGrid").val();
//   //   let slot3 = snap.child("slotThreeGrid").val();
//   //   let slot4 = snap.child("slotFourGrid").val();
//   //   let slot5 = snap.child("slotFiveGrid").val();
//   //   let slot6 = snap.child("slotSixGrid").val();

//   //   console.log(slot1);

//   // let slot1 = 200;
//   // let slot2 = 40;
//   // let slot3 = 10;
//   // let slot4 = 5;
//   // let slot5 = 20;
//   // let slot6 = 5;

//   // for (let i = 0; i < x.length; i++) {
//   //   x[i].style.backgroundColor = "green";

//   //   x[i].style.height = `${slot1}px`;

//   //   console.log(`Hello ${slot1}`);
//   // }

//   // });
// }
