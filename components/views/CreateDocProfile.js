import { db } from "../../firebase";

import * as state from "../../store";

// const dbRefObject = realtime.ref();
// dbRefObject.on("value", snap => {
//   let slotOne = snap.child("slotOne").val();
//   let slotTwo = snap.child("slotTwo").val();
//   let slotThree = snap.child("slotThree").val();

export default (st) => `
<div class="underNav">
<button class="hiddenButton"></button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>

<form class="doctorProfile">

<div>

<div class="doctorFormItem">
  <label class="doctorFormItem">First name:</label><input type="text" value="${state.CreateDocProfile.docUserData.firstName}" readonly>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Last name:</label><input type="text" value="${state.CreateDocProfile.docUserData.lastName}" readonly>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Specialty:</label><input id="specialtyValue" type="text" size="40" value="${state.CreateDocProfile.docUserData.specialty}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Sex:</label><input id="sexValue" type="text" value="${state.CreateDocProfile.docUserData.sex}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Age:</label><input id="ageValue" type="text" value="${state.CreateDocProfile.docUserData.age}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Office Name:</label><input id="officeNameValue" type="text" size="40" value="${state.CreateDocProfile.docUserData.officeName}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Address:</label><input id="addressValue" type="text" size="40" value="${state.CreateDocProfile.docUserData.address}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">City:</label><input id="cityValue" type="text" value="${state.CreateDocProfile.docUserData.city}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">State:</label><input id="stateValue" type="text" value="${state.CreateDocProfile.docUserData.state}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Zipcode:</label><input id="zipcodeValue" type="text" value="${state.CreateDocProfile.docUserData.zipcode}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Phone #:</label><input id="phoneValue" type="text" value="${state.CreateDocProfile.docUserData.phone}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Accepting New Patients:</label><input id="acceptingValue" type="text" size ="5" value="${state.CreateDocProfile.docUserData.accepting}" required>
</div>

</div>

<div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Bio:</label><input id="bioValue" size="65" style="word-break: break-word" value="${state.CreateDocProfile.docUserData.bio}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Education:</label><input id="educationValue" type="text" size="40" value="${state.CreateDocProfile.docUserData.education}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Specialties:</label><input id="specialtiesValue" type="text" size="40" value="${state.CreateDocProfile.docUserData.specialties}" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Insurance(s) Accepted:</label><input id="insuranceValue" type="text" size="40" value="${state.CreateDocProfile.docUserData.insurance}" required>
</div>

<div class="centerMiddleBottomBox">
<button id="saveDocData" class="navInApp docPortal docProfileSave">Save</button>
</div>

</div>

</form>`;
