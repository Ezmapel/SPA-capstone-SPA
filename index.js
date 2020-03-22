// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });

import * as components from "./components";

import * as state from "./store";

import * as externalFunctions from "./lib";

function render(st) {
  console.log("state is", st);
  document.querySelector("#root").innerHTML = `
  ${components.Nav()}
  ${components.Main(st)}
  ${components.Footer()}
`;

  console.log("st.Header", st.Header);

  console.log("Just a reminder to try importing...");
  externalFunctions.test();

  function navEventListeners() {
    document
      .querySelector(".accountTypeNav")
      .addEventListener("click", accountType);
    document
      .querySelector(".browseRegionNav")
      .addEventListener("click", browseRegion);
    document
      .querySelector(".browseTypeNav")
      .addEventListener("click", browseType);
    document
      .querySelector(".createDocProfileNav")
      .addEventListener("click", createDocProfile);
    document
      .querySelector(".createPatientProfileNav")
      .addEventListener("click", createPatientProfile);
    document
      .querySelector(".createUserDocNav")
      .addEventListener("click", createUserDoc);
    document
      .querySelector(".createUserPatientNav")
      .addEventListener("click", createUserPatient);
    document
      .querySelector(".docBookingsNav")
      .addEventListener("click", docBookings);
    document
      .querySelector(".docNotificationsNav")
      .addEventListener("click", docNotifications);
    document
      .querySelector(".docPortalNav")
      .addEventListener("click", docPortal);
    document.querySelector(".docSchedNav").addEventListener("click", docSched);
    document
      .querySelector(".docTimeSlotsNav")
      .addEventListener("click", docTimeSlots);
    document.querySelector(".homeNav").addEventListener("click", home);
    document
      .querySelector(".patientBookingsNav")
      .addEventListener("click", patientBookings);
    document
      .querySelector(".patientConfirmationNav")
      .addEventListener("click", patientConfirmation);
    document
      .querySelector(".patientPortalNav")
      .addEventListener("click", patientPortal);
    document
      .querySelector(".patientSkejitNav")
      .addEventListener("click", patientSkejit);
    document
      .querySelector(".patientViewDocNav")
      .addEventListener("click", patientViewDoc);
    document
      .querySelector(".searchResultsNav")
      .addEventListener("click", searchResults);
  }

  navEventListeners();

  // if (st.view === "Home") {
  //   home();
  // }
}
// } else if (st.Header === "Create New Account") {
//   accountTypePageEventListeners();
// } else {
//   console.log("ERROR");
// }
// }

home();

// EXPERIMENT WITH THIS TO HAVE IT HAPPEN ON CLICK...event.something.blah
// function listenToRegisterNow() {
//   document.querySelector(".newAccount").addEventListener("click", event => {
//     event.preventDefault(), console.log("Clicked");
//   });
// }

function accountType() {
  render(state.AccountType);
  document
    .querySelector(".createUserDoc")
    .addEventListener("click", createUserDoc);
  document
    .querySelector(".createUserPatient")
    .addEventListener("click", createUserPatient);
}

function browseRegion() {
  render(state.BrowseRegion);
  document.querySelector(".").addEventListener("click");
}

function browseType() {
  render(state.BrowseType);
  document.querySelector(".").addEventListener("click");
}

function createDocProfile() {
  render(state.CreateDocProfile);
  document.querySelector(".").addEventListener("click");
}

function createPatientProfile() {
  render(state.CreatePatientProfile);
  document.querySelector(".").addEventListener("click");
}

function createUserDoc() {
  render(state.CreateUserDoc);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
}

function createUserPatient() {
  render(state.CreateUserPatient);
  document.querySelector(".").addEventListener("click");
  document.querySelector(".").addEventListener("click");
}

function docBookings() {
  render(state.DocBookings);
  document.querySelector(".").addEventListener("click");
}

function docNotifications() {
  render(state.DocNotifications);
  document.querySelector(".").addEventListener("click");
}

function docPortal() {
  render(state.DocPortal);
  document.querySelector(".").addEventListener("click");
}

function docSched() {
  render(state.DocSched);
  document.querySelector(".").addEventListener("click");
}

function docTimeSlots() {
  render(state.DocTimeSlots);
  document.querySelector(".").addEventListener("click");
}

function home() {
  render(state.Home);
  document.querySelector(".accountType").addEventListener("click", accountType);
  document.querySelector(".browseType").addEventListener("click", browseType);
}

function patientBookings() {
  render(state.PatientBookings);
  document.querySelector(".").addEventListener("click");
}

function patientConfirmation() {
  render(state.PatientConfirmation);
  document.querySelector(".").addEventListener("click");
}

function patientPortal() {
  render(state.PatientPortal);
  document.querySelector(".").addEventListener("click");
}

function patientSkejit() {
  render(state.PatientSkejit);
  document.querySelector(".").addEventListener("click");
}

function patientViewDoc() {
  render(state.PatientViewDoc);
  document.querySelector(".").addEventListener("click");
}

function searchResults() {
  render(state.SearchResults);
  document.querySelector(".").addEventListener("click");
}
