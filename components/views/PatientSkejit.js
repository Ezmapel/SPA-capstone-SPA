import * as state from "../../store";

export default (st) => `
<div class="underNav">
<button class="navInApp patientViewDoc"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header} with ${state.PatientViewDoc.specificDocDetails[0].firstName} ${state.PatientViewDoc.specificDocDetails[0].lastName}!</h2>

<p>Would you like to confirm your appointment with ${state.PatientViewDoc.specificDocDetails[0].firstName} ${state.PatientViewDoc.specificDocDetails[0].lastName} for ${state.PatientSkejit.appointment}?</p>

<button class="navInApp patientConfirmation">Confirm! Skej-it!</button>
<button class="navInApp patientViewDoc">No thanks. I'd like another time slot.</button>`;
