export default st => `
<div class="underNav">
<button class="navInApp home"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>
<div id="vertcenter" class="center">
<img src="https://raw.githubusercontent.com/Ezmapel/SPA-capstone-SPA/master/pics/doctor.jpg">
<img src="https://raw.githubusercontent.com/Ezmapel/SPA-capstone-SPA/master/pics/patient.jpg">
</div>

<div class="center">
<button class="acctTypeButton createUserDoc">I am a new DOCTOR. Create my account now!</button>
<button class="acctTypeButton createUserPatient">I am a new PATIENT. Create my account now!</button>
</div>`;
