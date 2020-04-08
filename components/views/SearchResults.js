export default st => `
<div class="underNav">
<button class="navInApp patientPortal"><--</button>
</div>

<h2 class="showMe">${st.Header}</h2>

<div id="slotOne" class="timeSlot"></div>
<div id="slotTwo" class="timeSlot"></div>
<div id="slotThree" class="timeSlot"></div>

<button class="navInApp patientViewDoc">Read more about this Doctor</button>
<button class="navInApp patientSkejit">Make appointment!</button>`;
