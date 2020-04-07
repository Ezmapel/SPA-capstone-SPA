export default st => `<button class="login accountType">Back</button>
<h2 class="showMe">${st.Header}</h2>

<div class="loginBox">
<h2 class="border">Select your login info:</h2>
<input class="signin" placeholder="Email*">
<input class="signin" placeholder="Password*" type="password">
<input class="signin" placeholder="Confirm Password*" type="password">
<br>
<input class="signin" placeholder="First Name*">
<input class="signin" placeholder="Last Name*">
<button class="login patientPortal">Create</button>
</div>`;
