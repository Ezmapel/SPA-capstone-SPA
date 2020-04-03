import * as state from "../store";

import { render } from "../index";

import { docPortal } from "./DocPortal";

export function createDocProfile() {
  render(state.CreateDocProfile);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
}
