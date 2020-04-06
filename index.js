// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });

import * as components from "./components";

// import * as state from "./store";

import * as lib from "./lib";

// import { db } from "./firebase";

// const coll = db.collection("users");

// coll.doc("doctors").update({ firstName: "Test" });

// un-comment 3 lines above for Firebase

// import Navigo from "navigo";

// import { capitalize } from "lodash";

// const router = new Navigo(window.location.origin);

// router
//   .on({
//     "/": () => render(state.Home),
//     ":page": params => {
//       let page = capitalize(params.page);
//       render(state[page]);
//     }
//   })
//   .resolve();

export function render(st) {
  console.log("state is", st);
  document.querySelector("#root").innerHTML = `
  ${components.Nav()}
  ${components.Main(st)}
  ${components.Footer()}
`;

  console.log("st.Header", st.Header);

  function navEventListeners() {
    document
      .querySelector(".accountTypeNav")
      .addEventListener("click", lib.accountType);
    document
      .querySelector(".createDocProfileNav")
      .addEventListener("click", lib.createDocProfile);
    document
      .querySelector(".createPatientProfileNav")
      .addEventListener("click", lib.createPatientProfile);
    document
      .querySelector(".createUserDocNav")
      .addEventListener("click", lib.createUserDoc);
    document
      .querySelector(".createUserPatientNav")
      .addEventListener("click", lib.createUserPatient);
    document
      .querySelector(".docBookingsNav")
      .addEventListener("click", lib.docBookings);
    document
      .querySelector(".docNotificationsNav")
      .addEventListener("click", lib.docNotifications);
    document
      .querySelector(".docPortalNav")
      .addEventListener("click", lib.docPortal);
    document
      .querySelector(".docSchedNav")
      .addEventListener("click", lib.docSched);
    document
      .querySelector(".docTimeSlotsNav")
      .addEventListener("click", lib.docTimeSlots);
    document.querySelector(".homeNav").addEventListener("click", lib.home);
    document
      .querySelector(".patientBookingsNav")
      .addEventListener("click", lib.patientBookings);
    document
      .querySelector(".patientConfirmationNav")
      .addEventListener("click", lib.patientConfirmation);
    document
      .querySelector(".patientPortalNav")
      .addEventListener("click", lib.patientPortal);
    document
      .querySelector(".patientSkejitNav")
      .addEventListener("click", lib.patientSkejit);
    document
      .querySelector(".patientViewDocNav")
      .addEventListener("click", lib.patientViewDoc);
    document
      .querySelector(".searchResultsNav")
      .addEventListener("click", lib.searchResults);
  }

  navEventListeners();

  // router.updatePageLinks();
}

lib.home();
