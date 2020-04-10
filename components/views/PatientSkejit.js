import * as state from "../../store";

export default (st) => `
<div class="underNav">
<button class="navInApp searchResults"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header} with ${state.PatientViewDoc.specificDocDetails[0].firstName} ${state.PatientViewDoc.specificDocDetails[0].lastName}!</h2>

<section class="day">
<section class="dayOne">
<div class="calendar1">Slot 1</div>
<div class="calendar1">Slot 2</div>
<div class="calendar1">Slot 3</div>
<div class="calendar1">Slot 4</div>
<div class="calendar1">Slot 5</div>
<div class="calendar1">Slot 6</div>
<div class="calendar1">Slot 7</div>
<div class="calendar1">Slot 8</div>
</section>

<section class="dayTwo">
<div class="calendar2">Slot 1</div>
<div class="calendar2">Slot 2</div>
<div class="calendar2">Slot 3</div>
<div class="calendar2">Slot 4</div>
<div class="calendar2">Slot 5</div>
<div class="calendar2">Slot 6</div>
<div class="calendar2">Slot 7</div>
<div class="calendar2">Slot 8</div>
</section>

<section class="dayThree">
<div class="calendar3">Slot 1</div>
<div class="calendar3">Slot 2</div>
<div class="calendar3">Slot 3</div>
<div class="calendar3">Slot 4</div>
<div class="calendar3">Slot 5</div>
<div class="calendar3">Slot 6</div>
<div class="calendar3">Slot 7</div>
<div class="calendar3">Slot 8</div>
</section>

<section class="dayFour">
<div class="calendar4">Slot 1</div>
<div class="calendar4">Slot 2</div>
<div class="calendar4">Slot 3</div>
<div class="calendar4">Slot 4</div>
<div class="calendar4">Slot 5</div>
<div class="calendar4">Slot 6</div>
<div class="calendar4">Slot 7</div>
<div class="calendar4">Slot 8</div>
</section>

<section class="dayFive">
<div class="calendar5">Slot 1</div>
<div class="calendar5">Slot 2</div>
<div class="calendar5">Slot 3</div>
<div class="calendar5">Slot 4</div>
<div class="calendar5">Slot 5</div>
<div class="calendar5">Slot 6</div>
<div class="calendar5">Slot 7</div>
<div class="calendar5">Slot 8</div>
</section>

</section>

<button class="navInApp patientConfirmation">Confirm! Skej-it!</button>`;
