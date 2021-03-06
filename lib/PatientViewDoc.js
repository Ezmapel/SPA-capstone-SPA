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
  // document
  //   .querySelector(".patientSkejit")
  //   .addEventListener("click", patientSkejit);
  document.querySelector("#userLoggedIn").addEventListener("click", logoutHome);
  const skejitNowOne = document.querySelectorAll(".calendar1True");
  for (const skejitNow of skejitNowOne) {
    skejitNow.addEventListener("click", skejitOne);
  }
  const skejitNowTwo = document.querySelectorAll(".calendar2True");
  for (const skejitNow of skejitNowTwo) {
    skejitNow.addEventListener("click", skejitTwo);
  }
  const skejitNowThree = document.querySelectorAll(".calendar3True");
  for (const skejitNow of skejitNowThree) {
    skejitNow.addEventListener("click", skejitThree);
  }
  const skejitNowFour = document.querySelectorAll(".calendar4True");
  for (const skejitNow of skejitNowFour) {
    skejitNow.addEventListener("click", skejitFour);
  }
  const skejitNowFive = document.querySelectorAll(".calendar5True");
  for (const skejitNow of skejitNowFive) {
    skejitNow.addEventListener("click", skejitFive);
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

  // function to allow patients to book - render info on next page & take off realtime availability

  function skejitOne() {
    console.log(this.id);
    console.log(this.value);
    console.log(this.parentNode.id);

    let firstName = state.PatientViewDoc.specificDocDetails[0].firstName;
    let lastName = state.PatientViewDoc.specificDocDetails[0].lastName;
    console.log(firstName, lastName);

    state.PatientSkejit.appointment = this.id;
    state.PatientSkejit.day = this.parentNode.id;
    state.PatientSkejit.slot = this.value;

    const skejitDayOne = realtime
      .ref("doctors/" + lastName + firstName)
      .child("availability")
      .child("dayOne")
      .child(this.value);

    skejitDayOne.once("value", (snap) => {
      if (snap.val() === "true") {
        console.log("Book this:", snap.val());
        skejitDayOne.set("false");
        patientSkejit();
      } else {
        alert("Sorry, that appointment isn't available");
      }
    });
  }

  function skejitTwo() {
    console.log(this.id);
    console.log(this.value);
    console.log(this.parentNode.id);

    let firstName = state.PatientViewDoc.specificDocDetails[0].firstName;
    let lastName = state.PatientViewDoc.specificDocDetails[0].lastName;
    console.log(firstName, lastName);

    state.PatientSkejit.appointment = this.id;
    state.PatientSkejit.day = this.parentNode.id;
    state.PatientSkejit.slot = this.value;

    const skejitDayTwo = realtime
      .ref("doctors/" + lastName + firstName)
      .child("availability")
      .child("dayTwo")
      .child(this.value);

    skejitDayTwo.once("value", (snap) => {
      if (snap.val() === "true") {
        console.log("Book this:", snap.val());
        skejitDayTwo.set("false");
        patientSkejit();
      } else {
        alert("Sorry, that appointment isn't available");
      }
    });
  }

  function skejitThree() {
    console.log(this.id);
    console.log(this.value);
    console.log(this.parentNode.id);

    let firstName = state.PatientViewDoc.specificDocDetails[0].firstName;
    let lastName = state.PatientViewDoc.specificDocDetails[0].lastName;
    console.log(firstName, lastName);

    state.PatientSkejit.appointment = this.id;
    state.PatientSkejit.day = this.parentNode.id;
    state.PatientSkejit.slot = this.value;

    const skejitDayThree = realtime
      .ref("doctors/" + lastName + firstName)
      .child("availability")
      .child("dayThree")
      .child(this.value);

    skejitDayThree.once("value", (snap) => {
      if (snap.val() === "true") {
        console.log("Book this:", snap.val());
        skejitDayThree.set("false");
        patientSkejit();
      } else {
        alert("Sorry, that appointment isn't available");
      }
    });
  }

  function skejitFour() {
    console.log(this.id);
    console.log(this.value);
    console.log(this.parentNode.id);

    let firstName = state.PatientViewDoc.specificDocDetails[0].firstName;
    let lastName = state.PatientViewDoc.specificDocDetails[0].lastName;
    console.log(firstName, lastName);

    state.PatientSkejit.appointment = this.id;
    state.PatientSkejit.day = this.parentNode.id;
    state.PatientSkejit.slot = this.value;

    const skejitDayFour = realtime
      .ref("doctors/" + lastName + firstName)
      .child("availability")
      .child("dayFour")
      .child(this.value);

    skejitDayFour.once("value", (snap) => {
      if (snap.val() === "true") {
        console.log("Book this:", snap.val());
        skejitDayFour.set("false");
        patientSkejit();
      } else {
        alert("Sorry, that appointment isn't available");
      }
    });
  }

  function skejitFive() {
    console.log(this.id);
    console.log(this.value);
    console.log(this.parentNode.id);

    let firstName = state.PatientViewDoc.specificDocDetails[0].firstName;
    let lastName = state.PatientViewDoc.specificDocDetails[0].lastName;
    console.log(firstName, lastName);

    state.PatientSkejit.appointment = this.id;
    state.PatientSkejit.day = this.parentNode.id;
    state.PatientSkejit.slot = this.value;

    const skejitDayFive = realtime
      .ref("doctors/" + lastName + firstName)
      .child("availability")
      .child("dayFive")
      .child(this.value);

    skejitDayFive.once("value", (snap) => {
      if (snap.val() === "true") {
        console.log("Book this:", snap.val());
        skejitDayFive.set("false");
        patientSkejit();
      } else {
        alert("Sorry, that appointment isn't available");
      }
    });
  }

  // function runCheckAlertTwo() {
  //   console.log(this.value);

  //   let firstName = state.DocSched.docUserData.firstName;
  //   let lastName = state.DocSched.docUserData.lastName;

  //   // Day 2

  //   const checkedDayTwo = realtime
  //     .ref("doctors/" + lastName + firstName)
  //     .child("availability")
  //     .child("dayTwo")
  //     .child(this.value);

  //   checkedDayTwo.once("value", (snap) => {
  //     if (snap.val() === "true") {
  //       console.log("old", snap.val());
  //       checkedDayTwo.set("false");
  //     } else {
  //       console.log("old", snap.val());
  //       checkedDayTwo.set("true");
  //     }
  //   });
  // }

  // function runCheckAlertThree() {
  //   console.log(this.value);

  //   let firstName = state.DocSched.docUserData.firstName;
  //   let lastName = state.DocSched.docUserData.lastName;

  //   // Day 3

  //   const checkedDayThree = realtime
  //     .ref("doctors/" + lastName + firstName)
  //     .child("availability")
  //     .child("dayThree")
  //     .child(this.value);

  //   checkedDayThree.once("value", (snap) => {
  //     if (snap.val() === "true") {
  //       console.log("old", snap.val());
  //       checkedDayThree.set("false");
  //     } else {
  //       console.log("old", snap.val());
  //       checkedDayThree.set("true");
  //     }
  //   });
  // }

  // function runCheckAlertFour() {
  //   console.log(this.value);

  //   let firstName = state.DocSched.docUserData.firstName;
  //   let lastName = state.DocSched.docUserData.lastName;

  //   // Day 4

  //   const checkedDayFour = realtime
  //     .ref("doctors/" + lastName + firstName)
  //     .child("availability")
  //     .child("dayFour")
  //     .child(this.value);

  //   checkedDayFour.once("value", (snap) => {
  //     if (snap.val() === "true") {
  //       console.log("old", snap.val());
  //       checkedDayFour.set("false");
  //     } else {
  //       console.log("old", snap.val());
  //       checkedDayFour.set("true");
  //     }
  //   });
  // }

  // function runCheckAlertFive() {
  //   console.log(this.value);

  //   let firstName = state.DocSched.docUserData.firstName;
  //   let lastName = state.DocSched.docUserData.lastName;

  //   // Day 5

  //   const checkedDayFive = realtime
  //     .ref("doctors/" + lastName + firstName)
  //     .child("availability")
  //     .child("dayFive")
  //     .child(this.value);

  //   checkedDayFive.once("value", (snap) => {
  //     if (snap.val() === "true") {
  //       console.log("old", snap.val());
  //       checkedDayFive.set("false");
  //     } else {
  //       console.log("old", snap.val());
  //       checkedDayFive.set("true");
  //     }
  //   });
  // }
}

// OLD CODE BELOW IGNORE FOR NOW

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
