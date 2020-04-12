export default (st) => `
<div class="underNav">
<button class="hiddenButton"></button>
<button id="userLoggedIn"></button>
</div>

<section id="jumbotronDocPortal">
<section class="portalText">
<div>
<h2 class="headerAcct">${st.Header}</h2>
</div>
<div class="splitPortal">
<button class="portalButtonDoc docSched">Edit Schedule</button>
<button class="portalButtonDoc docNotifications">Notification Settings</button>
<button class="portalButtonDoc docBookings">Upcoming Appointments</button>
<button class="portalButtonDoc createDocProfile">Edit Your Profile</button>
</div>
</section>
</section>`;
