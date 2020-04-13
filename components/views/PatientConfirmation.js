import * as state from "../../store";

export default (st) => `
<div class="underNav">
<button class="navInApp searchResults"><-</button>
<button id="userLoggedIn"></button>
</div>

<div class="doctorProfile confirmationCenter">
<h2 class="showMe">${st.Header} with ${state.PatientViewDoc.specificDocDetails[0].firstName} ${state.PatientViewDoc.specificDocDetails[0].lastName}!</h2>

<p class="docBold lightText">You will receive an email confirmation shortly</p>

<div class="splitConfirm">
<button class="confirmButton patientBookings">View your upcoming bookings</button>
<button class="confirmButton patientPortal">Back to your portal</button>
<button class="confirmButton searchResults">Browse more doctors</button>
</div>
</div>
`;
