// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });

import * as components from "./components";

import * as state from "./store";

import * as lib from "./lib";

import { db, auth } from "./firebase";

import { docPortal } from "./lib/DocPortal";

import { patientPortal } from "./lib/PatientPortal";

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
  // console.log("state is", st);
  document.querySelector("#root").innerHTML = `
  ${components.Nav()}
  ${components.Main(st)}
  ${components.Footer()}`;

  // console.log("st.Header", st.Header);

  // authListener();

  // function authListener() {
  //   auth.onAuthStateChanged(function (user) {
  //     if (user) {
  //       state.Auth.loggedIn = "true";
  //       state.Auth.username = auth.currentUser.email;
  //     } else {
  //       state.Auth.loggedIn = "false";
  //       state.Auth.username = "";
  //     }

  //     let docUserEmail = state.Auth.username;
  //     console.log("Here we go", docUserEmail);

  //     db.collection("doctors")
  //       .doc(docUserEmail)
  //       .get()
  //       .then(function (doc) {
  //         if (doc.exists) {
  //           console.log("Document data", doc.data());
  //           // state.CreateDocProfile.docUserData = doc.data();
  //         } else console.log("This data does not exist");
  //       });

  //     console.log("authState:", state.Auth.loggedIn);
  //     console.log("username:", state.Auth.username);
  //   });
  // }

  // function navEventListeners() {
  //   document
  //     .querySelector(".accountTypeNav")
  //     .addEventListener("click", lib.accountType);
  //   document
  //     .querySelector(".createDocProfileNav")
  //     .addEventListener("click", lib.createDocProfile);
  //   document
  //     .querySelector(".createUserDocNav")
  //     .addEventListener("click", lib.createUserDoc);
  //   document
  //     .querySelector(".createUserPatientNav")
  //     .addEventListener("click", lib.createUserPatient);
  //   document
  //     .querySelector(".docBookingsNav")
  //     .addEventListener("click", lib.docBookings);
  //   document
  //     .querySelector(".docNotificationsNav")
  //     .addEventListener("click", lib.docNotifications);
  //   document
  //     .querySelector(".docPortalNav")
  //     .addEventListener("click", lib.docPortal);
  //   document
  //     .querySelector(".docSchedNav")
  //     .addEventListener("click", lib.docSched);
  //   document
  //     .querySelector(".docTimeSlotsNav")
  //     .addEventListener("click", lib.docTimeSlots);
  //   document.querySelector(".homeNav").addEventListener("click", lib.home);
  //   document
  //     .querySelector(".patientBookingsNav")
  //     .addEventListener("click", lib.patientBookings);
  //   document
  //     .querySelector(".patientConfirmationNav")
  //     .addEventListener("click", lib.patientConfirmation);
  //   document
  //     .querySelector(".patientPortalNav")
  //     .addEventListener("click", lib.patientPortal);
  //   document
  //     .querySelector(".patientSkejitNav")
  //     .addEventListener("click", lib.patientSkejit);
  //   document
  //     .querySelector(".patientViewDocNav")
  //     .addEventListener("click", lib.patientViewDoc);
  //   document
  //     .querySelector(".searchResultsNav")
  //     .addEventListener("click", lib.searchResults);
  // }

  // navEventListeners();

  // router.updatePageLinks();
}

lib.home();

// initialRender();

// function initialRender() {
//   lib.home();

//   let docUserEmail = state.Auth.username;

//   createState();

//   function createState() {
//     if (state.Auth.loggedIn === "true") {
//       db.collection("doctors")
//         .doc(docUserEmail)
//         .get()
//         .then(function (doc) {
//           if (doc.exists) {
//             console.log("Doc Sched data", doc.data());
//             state.DocSched.docUserData = doc.data();
//             state.CreateDocProfile.docUserData = doc.data();
//           } else console.log("This data does not exist");
//         });
//     }
//   }
// }
// This preloads doctor's FireStore data into state for access on CreateDocProfile Page...need to do the same with Realtime
// let docUserEmail = state.Auth.username;
// console.log("Here we go", docUserEmail);

// db.collection("doctors")
//   .doc(docUserEmail)
//   .get()
//   .then(function (doc) {
//     if (doc.exists) {
//       console.log("Document data", doc.data());
//       // state.CreateDocProfile.docUserData = doc.data();
//     } else console.log("This data does not exist");
//   });

authListener();

function authListener() {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      state.Auth.loggedIn = "true";
      state.Auth.username = auth.currentUser.email;
    } else {
      state.Auth.loggedIn = "false";
      state.Auth.username = "";
    }

    let docUserEmail = state.Auth.username;

    db.collection("doctors")
      .doc(docUserEmail)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data", doc.data());
          state.CreateDocProfile.docUserData = doc.data();
          state.DocSched.docUserData = doc.data();
          docPortal();
        } else {
          console.log("This user is likely a patient");
          patientPortal();
        }
      });

    // console.log("authState:", state.Auth.loggedIn);
    // console.log("username:", state.Auth.username);
    // console.log("Document Data", state.CreateDocProfile.docUserData);
  });
}

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     console.log("response", response.data);
//     response.data.forEach(post => {
//       state.Blog.posts.push(post);
//     });
//     const params = router.lastRouteResolved().params;
//     console.log("Params", params);
//     if (params) {
//       render(state[params.page]);
//     }
//   })
//   .catch(err => console.log(err));

db.collection("doctors")
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      // console.log(doc.id, " => ", doc.data());
      state.SearchResults.results.push(doc.data());
      state.SearchResultsGuest.results.push(doc.data());
    });
  })
  .catch(function (error) {
    console.log("Error getting documents: ", error);
  });
// (response) => {
// console.log("response", response.data);
// if (doc.exists) {
//   // console.log("Document data", doc.data());
//   state.CreateDocProfile.docUserData = doc.data();
//   state.DocSched.docUserData = doc.data();
//   state.SearchResults.results.push();
//   docPortal();
// } else {
//   console.log("This user is likely a patient");
//   patientPortal();
// }
// });
