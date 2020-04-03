import * as state from "../store";

import { render } from "../index";

import { docSched } from "./DocSched";

export function docTimeSlots() {
  render(state.DocTimeSlots);
  document.querySelector(".docSched").addEventListener("click", docSched);
}
