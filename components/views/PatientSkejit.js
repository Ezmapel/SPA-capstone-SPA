import * as state from "../../store";

export default (st) => `
<div class="underNav">
<button class="navInApp patientViewDoc"><-</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header} with ${state.PatientViewDoc.specificDocDetails[0].firstName} ${state.PatientViewDoc.specificDocDetails[0].lastName}!</h2>

<div class="doctorProfile confirmationCenter">
<h2 class="lightText">Confirm your appointment with:</h2>
<p class="docBold lightText">${state.PatientViewDoc.specificDocDetails[0].firstName} ${state.PatientViewDoc.specificDocDetails[0].lastName} for ${state.PatientSkejit.appointment}</p>

<div class="splitConfirm">

<div>
<button class="confirmationButton patientConfirmation">Confirm! Skej-it!</button>
</div>

<div>
<button class="confirmationButton patientViewDoc">No thanks. I'd like another time slot.</button>
</div>
</div>
</div>`;
