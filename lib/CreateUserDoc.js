import * as state from "../store";

import { render } from "../index";

import { realtime, db, auth } from "../firebase";

import { accountType } from "./AccountType";
import { createDocProfile } from "./CreateDocProfile";

export function createUserDoc() {
  render(state.CreateUserDoc);
  document
    .querySelector(".createDocProfile")
    .addEventListener("click", /*createDocProfile*/ addNewDoctor);
  document.querySelector(".accountType").addEventListener("click", accountType);
}

function addNewDoctor() {
  // let email = document.querySelector("#newDocEmail").value;
  // console.log(email);
  // let password = document.querySelector("#newDocPassword").value;
  // console.log(password);

  //   auth.createUserWithEmailAndPassword(email, password).then(response => {
  //     console.log("user registered");
  //     console.log(response);
  //     console.log(response.user);
  //   });

  // auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   let errorCode = error.code;
  //   console.log(errorCode);
  //   // alert(errorCode);
  //   let errorMessage = error.message;
  //   console.log(errorMessage);
  //   // alert(errorMessage);
  //   // ...
  // });

  const docEmail = document.querySelector("#newDocEmail").value;
  const docFirstName = document.querySelector("#doctorFirstName").value;
  const docLastName = document.querySelector("#doctorLastName").value;

  db.collection("doctors")
    .doc(docEmail)
    .get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        alert(
          "Looks like that email is already taken! Afraid you'll have to try something else :/"
        );
      } else {
        db
          .collection("doctors")
          .doc(docEmail)
          .set({
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
            address: "",
            phone: "",
            accepting: ""
          }),
          createDocProfile(),
          realtime.ref("doctors/" + docLastName + docFirstName).set({
            day0: {
              0: "",
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
              6: "",
              7: ""
            },
            day1: {
              0: "",
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
              6: "",
              7: ""
            },
            day2: {
              0: "",
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
              6: "",
              7: ""
            },
            day3: {
              0: "",
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
              6: "",
              7: ""
            },
            day4: {
              0: "",
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
              6: "",
              7: ""
            }
          });
      }
    });

  // realtimeObject.on("value", snap => console.log(snap.val()));

  // realtimeObject.on("value", snap => {
  //   let slotOne = snap.val();
  //   let slotTwo = snap.child("slotTwo").val();
  //   let slotThree = snap.child("slotThree").val();

  //   console.log(slotOne, slotTwo, slotThree);
  // });

  //   let testData = document.querySelector(".nameName").value;
  //   console.log(testData);
  //   const coll = db.collection("users");
  //   coll.doc("doctors").update({ firstName: testData });
  //   createDocProfile();
}
