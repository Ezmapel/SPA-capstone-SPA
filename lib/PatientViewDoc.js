import * as state from "../store";

import { render } from "../index";

import { searchResults } from "./SearchResults";
import { patientSkejit } from "./PatientSkejit";

import { home } from "./Home";
import { auth, realtime } from "../firebase";

export function patientViewDoc() {
  render(state.PatientViewDoc);
  scrollTo(0, 0);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientSkejit")
    .addEventListener("click", patientSkejit);
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
  // console.log("First", firstName, "Last", lastName);

  const sizeObject = realtime.ref("doctors/" + lastName + firstName);

  // One

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar1");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayOne").val();

    // console.log("allData", liveSize);
    // console.log("availability", liveColor);

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

    // console.log("allData", liveSize);
    // console.log("availability", liveColor);

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

    // console.log("allData", liveSize);
    // console.log("availability", liveColor);

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

    // console.log("allData", liveSize);
    // console.log("availability", liveColor);

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

    // console.log("allData", liveSize);
    // console.log("availability", liveColor);

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
}

// if (slotOne === "true") {
//       document.getElementById("slotOne").style.backgroundColor = "green";
//       document.getElementById("slotOne").innerHTML = "Available";
//     } else {
//       document.getElementById("slotOne").style.backgroundColor = "gray";
//       document.getElementById("slotOne").innerHTML = "Sorry";
//     }

// sizeObject.on("value", (snap) => {
//   let x = document.querySelectorAll(".calendar1");

//   let liveChange = snap.val();

//   for (let i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "lightblue";

//     x[i].style.height = `${liveChange.dayOne[i] * 50}px`;
//   }
// });

// sizeObject.on("value", (snap) => {
//   let x = document.querySelectorAll(".calendar2");

//   let liveChange = snap.val();

//   for (let i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "lightblue";

//     x[i].style.height = `${liveChange.dayTwo[i] * 50}px`;
//   }
// });

// sizeObject.on("value", (snap) => {
//   let x = document.querySelectorAll(".calendar3");

//   let liveChange = snap.val();

//   for (let i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "lightblue";

//     x[i].style.height = `${liveChange.dayThree[i] * 50}px`;
//   }
// });

// sizeObject.on("value", (snap) => {
//   let x = document.querySelectorAll(".calendar4");

//   let liveChange = snap.val();

//   for (let i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "lightblue";

//     x[i].style.height = `${liveChange.dayFour[i] * 50}px`;
//   }
// });

// sizeObject.on("value", (snap) => {
//   let x = document.querySelectorAll(".calendar5");

//   let liveChange = snap.val();

//   for (let i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "lightblue";

//     x[i].style.height = `${liveChange.dayFive[i] * 50}px`;
//   }
// });

// styling the unused boxes at bottom...showing realtime avail unavail switch

// const dbRefObject = realtime.ref();

// dbRefObject.on("value", snap => console.log(snap.val()));

// dbRefObject.on("value", (snap) => {
//   let slotOne = snap.child("slotOne").val();
//   let slotTwo = snap.child("slotTwo").val();
//   let slotThree = snap.child("slotThree").val();

//   if (slotOne === "true") {
//     document.getElementById("slotOne").style.backgroundColor = "green";
//     document.getElementById("slotOne").innerHTML = "Available";
//   } else {
//     document.getElementById("slotOne").style.backgroundColor = "gray";
//     document.getElementById("slotOne").innerHTML = "Sorry";
//   }
//   if (slotTwo === "true") {
//     document.getElementById("slotTwo").style.backgroundColor = "green";
//     document.getElementById("slotTwo").innerHTML = "Available";
//   } else {
//     document.getElementById("slotTwo").style.backgroundColor = "gray";
//     document.getElementById("slotTwo").innerHTML = "Sorry";
//   }
//   if (slotThree === "true") {
//     document.getElementById("slotThree").style.backgroundColor = "green";
//     document.getElementById("slotThree").innerHTML = "Available";
//   } else {
//     document.getElementById("slotThree").style.backgroundColor = "gray";
//     document.getElementById("slotThree").innerHTML = "Sorry";
//   }
// });
// }

//   dbRefObject.on("value", (snap) => {
//     let slotOne = snap.child("slotOne").val();
//     let slotTwo = snap.child("slotTwo").val();
//     let slotThree = snap.child("slotThree").val();

//     if (slotOne === "true") {
//       document.getElementById("slotOne").style.backgroundColor = "green";
//       document.getElementById("slotOne").innerHTML = "Available";
//     } else {
//       document.getElementById("slotOne").style.backgroundColor = "gray";
//       document.getElementById("slotOne").innerHTML = "Sorry";
//     }
//     if (slotTwo === "true") {
//       document.getElementById("slotTwo").style.backgroundColor = "green";
//       document.getElementById("slotTwo").innerHTML = "Available";
//     } else {
//       document.getElementById("slotTwo").style.backgroundColor = "gray";
//       document.getElementById("slotTwo").innerHTML = "Sorry";
//     }
//     if (slotThree === "true") {
//       document.getElementById("slotThree").style.backgroundColor = "green";
//       document.getElementById("slotThree").innerHTML = "Available";
//     } else {
//       document.getElementById("slotThree").style.backgroundColor = "gray";
//       document.getElementById("slotThree").innerHTML = "Sorry";
//     }
//   });
// }
