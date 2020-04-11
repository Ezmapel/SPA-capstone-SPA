import * as state from "../../store";

export default (st) => `<section id="allSearchResults">
<div class="underNav">
<button class="navInApp searchResults"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.specificDocDetails[0].firstName} ${st.specificDocDetails[0].lastName}</h2>

<section class="docProfilePage">

<div>
<img class="profileImg" src="${st.specificDocDetails[0].img}">
<p class="docBold">${st.specificDocDetails[0].firstName} ${st.specificDocDetails[0].lastName}, MD (Not a real doctor)</p>
<p>Specialty: ${st.specificDocDetails[0].specialty}</p>
<p>Sex: ${st.specificDocDetails[0].sex}</p>
<p>Age: ${st.specificDocDetails[0].age}</p>
<p>City: ${st.specificDocDetails[0].city}</p>
<p>State: ${st.specificDocDetails[0].state}</p>
</div>

<div>
<p>Bio: ${st.specificDocDetails[0].bio}</p>
<p>Education: ${st.specificDocDetails[0].education}</p>
<p>Specialties: ${st.specificDocDetails[0].specialties}</p>
<p>Insurance(s) accepted: ${st.specificDocDetails[0].insurance}</p>
<p>Patient rating: ${st.specificDocDetails[0].rating}</p>
<p>Accepting New Patients: ${st.specificDocDetails[0].accepting}</p>
</div>

<div>
<p>Office Name: ${st.specificDocDetails[0].officeName}</p>
<p>Location:<br>${st.specificDocDetails[0].address}<br>${st.specificDocDetails[0].city}, ${st.specificDocDetails[0].state}</p>
<p>Phone: ${st.specificDocDetails[0].phone}</p>
<div>

<div>
<img src="">
</div>
</section>

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
