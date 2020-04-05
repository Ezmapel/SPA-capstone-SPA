import * as state from "../store";

import { render } from "../index";

import { patientPortal } from "./PatientPortal";
import { patientSkejit } from "./PatientSkejit";
import { patientViewDoc } from "./PatientViewDoc";

import { realtime, db } from "../firebase";

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

  const dbRefObject = realtime.ref();

  // dbRefObject.on("value", snap => console.log(snap.val()));

  dbRefObject.on("value", snap => {
    let slotOne = snap.child("slotOne").val();
    let slotTwo = snap.child("slotTwo").val();
    let slotThree = snap.child("slotThree").val();

    if (slotOne === "true") {
      document.getElementById("slotOne").style.backgroundColor = "green";
    } else document.getElementById("slotOne").style.backgroundColor = "gray";
    if (slotTwo === "true") {
      document.getElementById("slotTwo").style.backgroundColor = "green";
    } else document.getElementById("slotTwo").style.backgroundColor = "gray";
    if (slotThree === "true") {
      document.getElementById("slotThree").style.backgroundColor = "green";
    } else document.getElementById("slotThree").style.backgroundColor = "gray";
  });

  // if (dbRefObject["slotOne"] === "true") {
  //   document.getElementById("slotOne").style.backgroundColor = "red";
  // } else document.getElementById("slotOne").style.backgroundColor = "black";

  // if (dbRefObject.slotTwo === "true") {
  //   document.getElementById("slotTwo").style.backgroundColor = "red";
  // } else document.getElementById("slotTwo").style.backgroundColor = "black";

  // if (dbRefObject.slotThree === "true") {
  //   document.getElementById("slotThree").style.backgroundColor = "red";
  // } else document.getElementById("slotThree").style.backgroundColor = "black";

  // listen();
}

// function listen() {
//   if (dbRefObject.child("slotOne") === "false") {
//   }
// }
