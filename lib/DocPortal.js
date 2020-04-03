import * as state from "../store";

import { render } from "../index";

import { docSched } from "./DocSched";
import { docNotifications } from "./DocNotifications";
import { docBookings } from "./DocBookings";
import { createDocProfile } from "./CreateDocProfile";

export function docPortal() {
  render(state.DocPortal);
  document.querySelector(".docSched").addEventListener("click", docSched);
  document
    .querySelector(".docNotifications")
    .addEventListener("click", docNotifications);
  document.querySelector(".docBookings").addEventListener("click", docBookings);
  document
    .querySelector(".createDocProfile")
    .addEventListener("click", createDocProfile);
}
