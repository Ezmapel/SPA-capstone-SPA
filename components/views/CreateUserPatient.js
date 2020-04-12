export default (st) => `
<div class="underNav">
<button class="navInApp accountType"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>

<div class="loginBox">
<h2 class="border lightText">Select your login info:</h2>
<input id="newPatientEmail" class="signin" placeholder="Email*">
<input id="newPatientPassword" class="signin" placeholder="Password*" type="password">
<input class="signin" placeholder="Confirm Password*" type="password">
<br>
<input id="patientFirstName" class="signin" placeholder="First Name*">
<input id="patientLastName" class="signin" placeholder="Last Name*">
<button class="login patientPortal">Create</button>
</div>`;
