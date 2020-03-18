// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });

import * as components from "./components";

import * as state from "./store";

function render(st = state.home) {
  console.log("state is", st);
  document.querySelector("#root").innerHTML = `
  ${components.Header(st)}
  ${components.Main(st)}
  ${components.Footer()}
`;

  // ${components.Nav()}

  addTestEventListener();
}

render(state.Home);

function addTestEventListener() {
  document.getElementById("testEvent").addEventListener("click", myFunction);
}

function myFunction() {
  console.log("Test test");
  render(state.AccountType);
}
