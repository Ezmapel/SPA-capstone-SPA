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
  document.querySelector(".home").addEventListener("click", home);
}

function browseRegion() {
  render(state.BrowseRegion);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
  document
    .querySelector(".patientSkejit")
    .addEventListener("click", patientSkejit);
  document
    .querySelector(".patientViewDoc")
    .addEventListener("click", patientViewDoc);
}

function browseType() {
  render(state.BrowseType);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
  document
    .querySelector(".patientSkejit")
    .addEventListener("click", patientSkejit);
  document
    .querySelector(".patientViewDoc")
    .addEventListener("click", patientViewDoc);
}

function createDocProfile() {
  render(state.CreateDocProfile);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
}

function createPatientProfile() {
  render(state.CreatePatientProfile);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
}

function createUserDoc() {
  render(state.CreateUserDoc);
  document
    .querySelector(".createDocProfile")
    .addEventListener("click", createDocProfile);
  document.querySelector(".accountType").addEventListener("click", accountType);
}

function createUserPatient() {
  render(state.CreateUserPatient);
  document
    .querySelector(".createPatientProfile")
    .addEventListener("click", createPatientProfile);
  document.querySelector(".accountType").addEventListener("click", accountType);
}

function docBookings() {
  render(state.DocBookings);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
}

function docNotifications() {
  render(state.DocNotifications);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
}

function docPortal() {
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

function docSched() {
  render(state.DocSched);
  document.querySelector(".docPortal").addEventListener("click", docPortal);
  document
    .querySelector(".docTimeSlots")
    .addEventListener("click", docTimeSlots);
}

function docTimeSlots() {
  render(state.DocTimeSlots);
  document.querySelector(".docSched").addEventListener("click", docSched);
}

function home() {
  render(state.Home);
  document.querySelector(".accountType").addEventListener("click", accountType);
  document
    .querySelector(".searchResultsGuest")
    .addEventListener("click", searchResultsGuest);
}

function patientBookings() {
  render(state.PatientBookings);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
}

function patientConfirmation() {
  render(state.PatientConfirmation);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientBookings")
    .addEventListener("click", patientBookings);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
}

function patientPortal() {
  render(state.PatientPortal);
  document
    .querySelector(".createPatientProfile")
    .addEventListener("click", createPatientProfile);
  // document
  //   .querySelector(".browseRegion")
  //   .addEventListener("click", browseRegion);
  // document.querySelector(".browseType").addEventListener("click", browseType);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientBookings")
    .addEventListener("click", patientBookings);
}

function patientSkejit() {
  render(state.PatientSkejit);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientConfirmation")
    .addEventListener("click", patientConfirmation);
}

function patientViewDoc() {
  render(state.PatientViewDoc);
  document
    .querySelector(".searchResults")
    .addEventListener("click", searchResults);
  document
    .querySelector(".patientSkejit")
    .addEventListener("click", patientSkejit);
}

function patientViewDocGuest() {
  render(state.PatientViewDocGuest);
  document
    .querySelector(".searchResultsGuest")
    .addEventListener("click", searchResultsGuest);
  document
    .querySelector(".createUserPatient")
    .addEventListener("click", createUserPatient);
}

function searchResults() {
  render(state.SearchResults);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", patientPortal);
  document
    .querySelector(".patientSkejit")
    .addEventListener("click", patientSkejit);
  document
    .querySelector(".patientViewDoc")
    .addEventListener("click", patientViewDoc);
}

function searchResultsGuest() {
  render(state.SearchResultsGuest);
  document
    .querySelector(".patientViewDocGuest")
    .addEventListener("click", patientViewDocGuest);
  document
    .querySelector(".createUserPatient")
    .addEventListener("click", createUserPatient);
}
