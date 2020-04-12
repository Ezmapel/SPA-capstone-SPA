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
  const checkboxOne = document.querySelectorAll(".calendar1True");
  for (const checkbox of checkboxOne) {
    checkbox.addEventListener("click", runCheckAlertOne);
  }
  const checkboxTwo = document.querySelectorAll(".calendar2True");
  for (const checkbox of checkboxTwo) {
    checkbox.addEventListener("click", runCheckAlertTwo);
  }
  const checkboxThree = document.querySelectorAll(".calendar3True");
  for (const checkbox of checkboxThree) {
    checkbox.addEventListener("click", runCheckAlertThree);
  }
  const checkboxFour = document.querySelectorAll(".calendar4True");
  for (const checkbox of checkboxFour) {
    checkbox.addEventListener("click", runCheckAlertFour);
  }
  const checkboxFive = document.querySelectorAll(".calendar5True");
  for (const checkbox of checkboxFive) {
    checkbox.addEventListener("click", runCheckAlertFive);
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

  // setTimeout(resize, 1500);

  resize();
}

function runCheckAlertOne() {
  console.log(this.value);

  let firstName = state.DocSched.docUserData.firstName;
  let lastName = state.DocSched.docUserData.lastName;

  // Day 1

  const checkedDayOne = realtime
    .ref("doctors/" + lastName + firstName)
    .child("availability")
    .child("dayOne")
    .child(this.value);

  checkedDayOne.once("value", (snap) => {
    // let dayOneboxes = checkedDayOne
    //   .child("availability")
    //   .child("dayOne")
    //   .child(this.value);

    if (snap.val() === "true") {
      console.log("old", snap.val());
      checkedDayOne.set("false");
    } else {
      console.log("old", snap.val());
      checkedDayOne.set("true");
    }
  });

  // Day 2

  // const checkedDayTwo = realtime
  //   .ref("doctors/" + lastName + firstName)
  //   .child("availability")
  //   .child("dayTwo")
  //   .child(this.value);

  // checkedDayTwo.once("value", (snap) => {
  //   // let dayTwoboxes = checkedDayTwo
  //   //   .child("availability")
  //   //   .child("dayTwo")
  //   //   .child(this.value);

  //   if (snap.val() === "true") {
  //     console.log("old", snap.val());
  //     checkedDayTwo.set("false");
  //   } else {
  //     console.log("old", snap.val());
  //     checkedDayTwo.set("true");
  //   }
  // });

  // Day 3

  // const checkedDayThree = realtime.ref("doctors/" + lastName + firstName);

  // checkedDayThree.once("value", (snap) => {
  //   let dayThreeboxes = checkedDayThree
  //     .child("availability")
  //     .child("dayThree")
  //     .child(this.value);

  //   if (snap.val() === "true") {
  //     console.log("old", snap.val());
  //     dayThreeboxes.set("false");
  //   } else {
  //     console.log("old", snap.val());
  //     dayThreeboxes.set("true");
  //   }
  // });
  // Day 4

  // const checkedDayFour = realtime.ref("doctors/" + lastName + firstName);

  // checkedDayFour.once("value", (snap) => {
  //   let dayFourboxes = checkedDayFour
  //     .child("availability")
  //     .child("dayFour")
  //     .child(this.value);

  //   if (snap.val() === "true") {
  //     console.log("old", snap.val());
  //     dayFourboxes.set("false");
  //   } else {
  //     console.log("old", snap.val());
  //     dayFourboxes.set("true");
  //   }
  // });

  // Day 5

  // const checkedDayFive = realtime.ref("doctors/" + lastName + firstName);

  // checkedDayFive.once("value", (snap) => {
  //   let dayFiveboxes = checkedDayFive
  //     .child("availability")
  //     .child("dayFive")
  //     .child(this.value);

  //   if (snap.val() === "true") {
  //     console.log("old", snap.val());
  //     dayFiveboxes.set("false");
  //   } else {
  //     console.log("old", snap.val());
  //     dayFiveboxes.set("true");
  //   }
  // });
}

function runCheckAlertTwo() {
  console.log(this.value);

  let firstName = state.DocSched.docUserData.firstName;
  let lastName = state.DocSched.docUserData.lastName;

  // Day 2

  const checkedDayTwo = realtime
    .ref("doctors/" + lastName + firstName)
    .child("availability")
    .child("dayTwo")
    .child(this.value);

  checkedDayTwo.once("value", (snap) => {
    // let dayTwoboxes = checkedDayTwo
    //   .child("availability")
    //   .child("dayTwo")
    //   .child(this.value);

    if (snap.val() === "true") {
      console.log("old", snap.val());
      checkedDayTwo.set("false");
    } else {
      console.log("old", snap.val());
      checkedDayTwo.set("true");
    }
  });
}

function runCheckAlertThree() {
  console.log(this.value);

  let firstName = state.DocSched.docUserData.firstName;
  let lastName = state.DocSched.docUserData.lastName;

  // Day 3

  const checkedDayThree = realtime
    .ref("doctors/" + lastName + firstName)
    .child("availability")
    .child("dayThree")
    .child(this.value);

  checkedDayThree.once("value", (snap) => {
    if (snap.val() === "true") {
      console.log("old", snap.val());
      checkedDayThree.set("false");
    } else {
      console.log("old", snap.val());
      checkedDayThree.set("true");
    }
  });
}

function runCheckAlertFour() {
  console.log(this.value);

  let firstName = state.DocSched.docUserData.firstName;
  let lastName = state.DocSched.docUserData.lastName;

  // Day 4

  const checkedDayFour = realtime
    .ref("doctors/" + lastName + firstName)
    .child("availability")
    .child("dayFour")
    .child(this.value);

  checkedDayFour.once("value", (snap) => {
    if (snap.val() === "true") {
      console.log("old", snap.val());
      checkedDayFour.set("false");
    } else {
      console.log("old", snap.val());
      checkedDayFour.set("true");
    }
  });
}

function runCheckAlertFive() {
  console.log(this.value);

  let firstName = state.DocSched.docUserData.firstName;
  let lastName = state.DocSched.docUserData.lastName;

  // Day 5

  const checkedDayFive = realtime
    .ref("doctors/" + lastName + firstName)
    .child("availability")
    .child("dayFive")
    .child(this.value);

  checkedDayFive.once("value", (snap) => {
    if (snap.val() === "true") {
      console.log("old", snap.val());
      checkedDayFive.set("false");
    } else {
      console.log("old", snap.val());
      checkedDayFive.set("true");
    }
  });
}

function resize() {
  // let docUserEmail = state.Auth.username;

  // if (state.Auth.loggedIn === "true") {
  //   db.collection("doctors")
  //     .doc(docUserEmail)
  //     .get()
  //     .then(function (doc) {
  //       if (doc.exists) {
  //         console.log("Doc Sched data", doc.data());
  //         state.DocSched.docUserData = doc.data();
  //       } else console.log("This data does not exist");
  //     });
  // }

  let firstName = state.DocSched.docUserData.firstName;
  let lastName = state.DocSched.docUserData.lastName;

  const sizeObject = realtime.ref("doctors/" + lastName + firstName);

  // One

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar1");
    let y = document.querySelectorAll(".calendar1True");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayOne").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";
        y[i].checked = true;

        x[i].style.height = `${liveSize.dayOne[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";
        y[i].checked = false;

        x[i].style.height = `${liveSize.dayOne[i] * 50}px`;
      }
    }
  });

  // Two

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar2");
    let y = document.querySelectorAll(".calendar2True");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayTwo").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";
        y[i].checked = true;

        x[i].style.height = `${liveSize.dayTwo[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";
        y[i].checked = false;

        x[i].style.height = `${liveSize.dayTwo[i] * 50}px`;
      }
    }
  });

  // Three

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar3");
    let y = document.querySelectorAll(".calendar3True");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayThree").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";
        y[i].checked = true;

        x[i].style.height = `${liveSize.dayThree[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";
        y[i].checked = false;

        x[i].style.height = `${liveSize.dayThree[i] * 50}px`;
      }
    }
  });

  // Four

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar4");
    let y = document.querySelectorAll(".calendar4True");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayFour").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";
        y[i].checked = true;

        x[i].style.height = `${liveSize.dayFour[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";
        y[i].checked = false;

        x[i].style.height = `${liveSize.dayFour[i] * 50}px`;
      }
    }
  });

  // Five

  sizeObject.on("value", (snap) => {
    let x = document.querySelectorAll(".calendar5");
    let y = document.querySelectorAll(".calendar5True");

    let liveSize = snap.val();
    let liveColor = snap.child("availability").child("dayFive").val();

    console.log("allData", liveSize);
    console.log("availability", liveColor);

    for (let i = 0; i < x.length; i++) {
      if (liveColor[i] === "true") {
        x[i].style.backgroundColor = "lightBlue";
        x[i].style.color = "black";
        y[i].checked = true;

        x[i].style.height = `${liveSize.dayFive[i] * 50}px`;
      } else {
        x[i].style.backgroundColor = "rgb(0, 7, 45)";
        x[i].style.color = "white";
        y[i].checked = false;

        x[i].style.height = `${liveSize.dayFive[i] * 50}px`;
      }
    }
  });
}

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
// }

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
