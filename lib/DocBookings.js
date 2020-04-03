import * as state from "../store";

import { render } from "../index";

import { docPortal } from "./DocPortal";

export function docBookings() {
  render(state.DocBookings);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
}
