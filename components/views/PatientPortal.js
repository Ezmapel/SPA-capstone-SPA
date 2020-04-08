export default st => `
<div class="underNav">
<button class="hiddenButton"></button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>
<button class="portalButton searchResults"=>Search Doctors</button>
<button class="portalButton patientBookings"=>View Your Upcoming Appointments</button>`;
