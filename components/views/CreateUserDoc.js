export default st => `
<button class="login accountType">Back</button>
<h2 class="showMe">${st.Header}</h2>

<div class="loginBox">
<h2 class="border">Select your login info:</h2>
<input type="text" class="signin nameName" placeholder="Username">
<input class="signin" id="passPass" placeholder="Password" type="password">
<input class="signin" placeholder="Confirm Password" type="password">
<button class="login createDocProfile">Create</button>
</div>`;
