import * as state from "../store";

import { render } from "../index";

import { db, realtime } from "../firebase";

import { patientPortal } from "./PatientPortal";
import { accountType } from "./AccountType";

export function createUserPatient() {
  render(state.CreateUserPatient);
  document
    .querySelector(".patientPortal")
    .addEventListener("click", addNewPatient);
  document.querySelector(".accountType").addEventListener("click", accountType);
  document.querySelector("#patientFirstName").required = true;
  document.querySelector("#patientLastName").required = true;
}

function addNewPatient() {
  const patientEmail = document.querySelector("#newPatientEmail").value;
  const patientFirstName = document.querySelector("#patientFirstName").value;
  const patientLastName = document.querySelector("#patientLastName").value;

  db.collection("patients")
    .doc(patientEmail)
    .get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        alert(
          "Looks like that email is already taken! Afraid you'll have to try something else :/"
        );
      } else {
        db
          .collection("patients")
          .doc(patientEmail)
          .set({
            email: patientEmail,
            firstName: patientFirstName,
            lastName: patientLastName
          }),
          patientPortal();
      }
    });
}
