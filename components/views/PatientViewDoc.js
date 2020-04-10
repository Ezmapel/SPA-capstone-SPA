import * as state from "../../store";

export default (st) => `<section id="allSearchResults">
<div class="underNav">
<button class="navInApp searchResults"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.specificDocDetails[0].firstName} ${st.specificDocDetails[0].lastName}</h2>

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

<div id="slotOne" class="timeSlot"></div>
<div id="slotTwo" class="timeSlot"></div>
<div id="slotThree" class="timeSlot"></div>

<button class="navInApp patientSkejit">Make appointment!</button>
</section>`;

// function formatResults(result) {
//   return `
//   ${state.SearchResults.results.map((result) => formatResults(result)).join("")}

//   <p>${state.SearchResults.results}</p>

//   <div class="individualSearchResult">
//     <div class="split">
//     <div>
//     <p class="docBold">${state.SearchResults.results.result.firstName} MD (Not a real doctor)</p>
//     </div>
//   </div>

//   </div>`;
// }
