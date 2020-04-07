import * as state from "../store";

import { render } from "../index";

import { realtime } from "../firebase";

import { docPortal } from "./DocPortal";
import { docTimeSlots } from "./DocTimeSlots";

export function docSched() {
  render(state.DocSched);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
  document
    .querySelector(".docTimeSlots")
    .addEventListener("click", docTimeSlots);

  resize();
}

function resize() {
  const sizeObject = realtime.ref();

  sizeObject.on("value", snap => {
    let x = document.querySelectorAll(".calendar1");

    let testDisplay = snap.val();

    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "lightblue";

      x[i].style.height = `${testDisplay.slots.columnOne[i] * 5}px`;
    }
  });

  sizeObject.on("value", snap => {
    let x = document.querySelectorAll(".calendar2");

    let testDisplay = snap.val();

    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "lightblue";

      x[i].style.height = `${testDisplay.slots.columnTwo[i] * 5}px`;
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
