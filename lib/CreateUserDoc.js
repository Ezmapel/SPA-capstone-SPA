import * as state from "../store";

import { render } from "../index";

import { realtime, db, auth } from "../firebase";

import { accountType } from "./AccountType";
import { createDocProfile } from "./CreateDocProfile";
import { home } from "./Home";

export function createUserDoc() {
  render(state.CreateUserDoc);
  scrollTo(0, 0);
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

  const docEmail = document.querySelector("#newDocEmail").value.toLowerCase();
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
          zipcode: "",
          bio: "",
          education: "",
          specialties: "",
          insurance: "",
          rating: "5/5 stars",
          officeName: "",
          address: "",
          phone: "",
          accepting: "Yes",
          loggedIn: "true",
          img:
            "https://raw.githubusercontent.com/Ezmapel/SPA-capstone-SPA/master/pics/profilepic.png",
        }),
          db.collection("users").doc(docEmail).set({
            user: "doctor",
          }),
          // createDocProfile(),
          realtime.ref("doctors/" + docLastName + docFirstName).set({
            availability: {
              dayOne: {
                0: "true",
                1: "true",
                2: "true",
                3: "true",
                4: "true",
                5: "true",
                6: "true",
                7: "true",
              },
              dayTwo: {
                0: "true",
                1: "true",
                2: "true",
                3: "true",
                4: "true",
                5: "true",
                6: "true",
                7: "true",
              },
              dayThree: {
                0: "true",
                1: "true",
                2: "true",
                3: "true",
                4: "true",
                5: "true",
                6: "true",
                7: "true",
              },
              dayFour: {
                0: "true",
                1: "true",
                2: "true",
                3: "true",
                4: "true",
                5: "true",
                6: "true",
                7: "true",
              },
              dayFive: {
                0: "true",
                1: "true",
                2: "true",
                3: "true",
                4: "true",
                5: "true",
                6: "true",
                7: "true",
              },
            },
            dayOne: {
              0: "1",
              1: "1",
              2: "1.5",
              3: "1",
              4: "2",
              5: ".5",
              6: ".5",
              7: ".5",
            },
            dayTwo: {
              0: "1",
              1: "1",
              2: "1.5",
              3: "1",
              4: "2",
              5: ".5",
              6: ".5",
              7: ".5",
            },
            dayThree: {
              0: "1",
              1: "1",
              2: "1.5",
              3: "1",
              4: "2",
              5: ".5",
              6: ".5",
              7: ".5",
            },
            dayFour: {
              0: "1",
              1: "1",
              2: "1.5",
              3: "1",
              4: "2",
              5: ".5",
              6: ".5",
              7: ".5",
            },
            dayFive: {
              0: "1",
              1: "1",
              2: "1.5",
              3: "1",
              4: "2",
              5: ".5",
              6: ".5",
              7: ".5",
            },
          });
      }
    });

  // createDocProfile();
}
