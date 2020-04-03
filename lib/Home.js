import * as state from "../store";

import { render } from "../index";

import { accountType } from "./AccountType";
import { searchResultsGuest } from "./SearchResultsGuest";

export function home() {
  render(state.Home);
  document.querySelector(".accountType").addEventListener("click", accountType);
  document
    .querySelector(".searchResultsGuest")
    .addEventListener("click", searchResultsGuest);
}
