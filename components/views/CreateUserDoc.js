export default st => `
<div class="underNav">
<button class="navInApp accountType"><--</button>
</div>

<h2 class="showMe">${st.Header}</h2>

<div class="loginBox">
<h2 class="border">Select your login info:</h2>
<input id="newDocEmail" class="signin" placeholder="Email*" type="text" >
<input id="newDocPassword" class="signin" placeholder="Password*" type="password">
<input class="signin" placeholder="Confirm Password*" type="password">
<br>
<input id="doctorFirstName" class="signin" placeholder="First Name*">
<input id="doctorLastName" class="signin" placeholder="Last Name*">
<button class="login createDocProfile">Create</button>
</div>`;
