import * as state from "../store";

import { render } from "../index";

import { docPortal } from "./DocPortal";
import { docTimeSlots } from "./DocTimeSlots";

export function docSched() {
  render(state.DocSched);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
  document
    .querySelector(".docTimeSlots")
    .addEventListener("click", docTimeSlots);
}
