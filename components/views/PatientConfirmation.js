import * as state from "../../store";

export default (st) => `
<div class="underNav">
<button class="navInApp searchResults"><-</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header} with ${state.PatientViewDoc.specificDocDetails[0].firstName} ${state.PatientViewDoc.specificDocDetails[0].lastName}!</h2>

<p>Congratulations! Your appointment with ${state.PatientViewDoc.specificDocDetails[0].firstName} ${state.PatientViewDoc.specificDocDetails[0].lastName} for ${state.PatientSkejit.appointment} has been successfully booked!</p>

<button class="navInApp patientBookings">View your upcoming bookings</button>
<button class="navInApp patientPortal">Back to your portal</button>
<button class="navInApp searchResults">Browse more doctors</button>
`;
