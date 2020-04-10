export default (st) => `
<div class="underNav">
<button class="navInApp searchResults"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>

<div id="slotOne" class="timeSlot"></div>
<div id="slotTwo" class="timeSlot"></div>
<div id="slotThree" class="timeSlot"></div>

<button class="navInApp patientSkejit">Make appointment!</button>`;
