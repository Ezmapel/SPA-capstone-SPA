export default (st) => `
<div class="underNav">
<button class="navInApp home"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>
<section id="jumbotronAccountType">
<div id="vertcenter" class="center">
<img class="imageOne" src="">
</div>
</section>

<div class="center">
<button class="acctTypeButton createUserDoc">I am a new DOCTOR. Create my account now!</button>
<button class="acctTypeButton createUserPatient">I am a new PATIENT. Create my account now!</button>
</div>`;
