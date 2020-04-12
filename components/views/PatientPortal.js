export default (st) => `
<div class="underNav">
<button class="hiddenButton"></button>
<button id="userLoggedIn"></button>
</div>

<section id="jumbotronPatientPortal">
<section class="portalText">
<div>
<h2 class="headerAcct">${st.Header}</h2>
</div>
<div class="splitPortal">
<button class="portalButton searchResults"=>Search Doctors</button>
<button class="portalButton patientBookings"=>View Your Upcoming Appointments</button>
</div>
</section>
</section>`;

{
  /* <section id="jumbotronAccountType">
<section class="jumbotronAccountText">
<h1 class="headerAcct">${st.Header}</h1>
<div class="center">
<button class="acctTypeButton createUserDoc">I am a new DOCTOR. Create my account now!</button>
<button class="acctTypeButton createUserPatient">I am a new PATIENT. Create my account now!</button>
</div>
</section>
</section> */
}
