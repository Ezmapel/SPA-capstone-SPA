export default (st) => `
<div class="underNav">
<button class="hiddenButton"></button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>
<button class="portalButton docSched">Edit Schedule</button>
<button class="portalButton docNotifications">Notification Settings</button>
<button class="portalButton docBookings">Upcoming Appointments</button>
<button class="portalButton createDocProfile">Edit Your Profile</button>`;
