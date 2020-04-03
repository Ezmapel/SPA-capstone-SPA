import * as state from "../store";

import { render } from "../index";

import { docPortal } from "./DocPortal";

export function docNotifications() {
  render(state.DocNotifications);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
}
