export default st => `
<div class="underNav">
<button class="navInApp searchResults"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>

<button class="navInApp patientBookings">View your upcoming bookings</button>
<button class="navInApp patientPortal">Back to your portal</button>
`;
