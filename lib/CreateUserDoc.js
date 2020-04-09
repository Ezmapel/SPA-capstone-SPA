import * as state from "../store";

import { render } from "../index";

import { realtime, db, auth } from "../firebase";

import { accountType } from "./AccountType";
import { createDocProfile } from "./CreateDocProfile";
import { home } from "./Home";

export function createUserDoc() {
  render(state.CreateUserDoc);
  document
    .querySelector(".createDocProfile")
    .addEventListener("click", addNewDoctor);
  document.querySelector(".accountType").addEventListener("click", accountType);
  document.querySelector("#userLoggedIn").addEventListener("click", logoutHome);

  function logoutHome() {
    auth
      .signOut()
      .then(logOutButton.classList.add("logOutButtonHidden"))
      .then(home());
  }

  const logOutButton = document.querySelector("#userLoggedIn");

  if (state.Auth.loggedIn === "true") {
    logOutButton.innerHTML = "Log Out";
    logOutButton.classList.add("logOutButton");
  } else {
    logOutButton.innerHTML = "";
    logOutButton.classList.add("logOutButtonHidden");
  }
}

function addNewDoctor() {
  const email = document.querySelector("#newDocEmail").value;
  const password = document.querySelector("#newDocPassword").value;

  // auth.createUserWithEmailAndPassword(email, password).then(response => {
  //   console.log("user registered");
  //   console.log(response);
  //   console.log(response.user);
  // });

  auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    alert(errorCode);
    let errorMessage = error.message;
    alert(errorMessage);
    // ...
  });

  const docEmail = document.querySelector("#newDocEmail").value;
  const docFirstName = document.querySelector("#doctorFirstName").value;
  const docLastName = document.querySelector("#doctorLastName").value;
  db.collection("doctors")
    .doc(docEmail)
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        alert(
          "Looks like that email is already taken! Afraid you'll have to try something else :/"
        );
      } else {
        db.collection("doctors").doc(docEmail).set({
          email: docEmail,
          firstName: docFirstName,
          lastName: docLastName,
          specialty: "",
          sex: "",
          age: "",
          city: "",
          state: "",
          bio: "",
          education: "",
          specialties: "",
          insurance: "",
          rating: "",
          officeName: "",
          address: "",
          phone: "",
          accepting: "",
          loggedIn: "true",
        }),
          db.collection("users").doc(docEmail).set({
            user: "doctor",
          }),
          createDocProfile(),
          realtime.ref("doctors/" + docLastName + docFirstName).set({
            dayOne: {
              0: "1",
              1: "1",
              2: "1",
              3: "2",
              4: ".5",
              5: ".5",
              6: "1",
              7: "1",
            },
            dayTwo: {
              0: "1",
              1: "1",
              2: "1",
              3: "2",
              4: ".5",
              5: ".5",
              6: "1",
              7: "1",
            },
            dayThree: {
              0: "1",
              1: "1",
              2: "1",
              3: "2",
              4: ".5",
              5: ".5",
              6: "1",
              7: "1",
            },
            dayFour: {
              0: "1",
              1: "1",
              2: "1",
              3: "1",
              4: "1",
              5: "1",
              6: "1",
              7: "1",
            },
            dayFive: {
              0: "1",
              1: "1",
              2: "1",
              3: "1",
              4: "1",
              5: "1",
              6: "1",
              7: "1",
            },
          });
      }
    });

  createDocProfile();
}
