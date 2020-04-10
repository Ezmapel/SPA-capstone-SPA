import * as state from "../../store";

export default (st) => `<section id="allSearchResults">
<div class="underNav">
<button class="navInApp searchResults"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.specificDocDetails[0].firstName} ${st.specificDocDetails[0].lastName}</h2>

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
