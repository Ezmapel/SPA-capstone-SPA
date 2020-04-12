export default (st) => `
<div class="underNav">
<button class="navInApp home"><--</button>
<button id="userLoggedIn"></button>
</div>

<section id="jumbotronAccountType">
<section class="jumbotronAccountText">
<h1 class="headerAcct">${st.Header}</h1>
<div class="center">
<button class="acctTypeButton createUserDoc">I am a new DOCTOR. Create my account now!</button>
<button class="acctTypeButton createUserPatient">I am a new PATIENT. Create my account now!</button>
</div>
</section>
</section>`;
