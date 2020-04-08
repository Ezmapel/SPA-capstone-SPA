export default st => `
<div class="underNav">
<button class="navInApp docPortal"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>
<section class="day">
<section class="dayOne">
<div class="calendar1">Slot 1</div>
<div class="calendar1">Slot 2</div>
<div class="calendar1">Slot 3</div>
<div class="calendar1">Slot 4</div>
<div class="calendar1">Slot 5</div>
<div class="calendar1">Slot 6</div>
</section>

<section class="dayTwo">
<div class="calendar2">Slot 1</div>
<div class="calendar2">Slot 2</div>
<div class="calendar2">Slot 3</div>
<div class="calendar2">Slot 4</div>
<div class="calendar2">Slot 5</div>
<div class="calendar2">Slot 6</div>
</section>
</section>

<button class="navInApp docTimeSlots">Edit</button>`;
