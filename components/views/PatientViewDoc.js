export default (st) => `
<section id="allSearchResults">
    <div class="underNav">
      <button class="navInApp searchResults"><--</button>
      <button id="userLoggedIn"></button>
    </div>

    <h2 class="showMe">${st.specificDocDetails[0].firstName} ${st.specificDocDetails[0].lastName}</h2>

    <section id="freshDocProfile">
        <section class="docProfileCenter">
          <div>
            <img class="profileImgTwo" src="${st.specificDocDetails[0].img}">
          </div>

          <div>
            <h4 class="profileName">${st.specificDocDetails[0].firstName} ${st.specificDocDetails[0].lastName}, MD<br>(Not a real doctor)</h4>
            <p><span class="docBold">Specialty: </span>${st.specificDocDetails[0].specialty}</p>
            <p><span class="docBold">Sex: </span>${st.specificDocDetails[0].sex}</p>
            <p><span class="docBold">Age: </span>${st.specificDocDetails[0].age}</p>
            <p><span class="docBold">City: </span>${st.specificDocDetails[0].city}</p>
            <p><span class="docBold">State: </span>${st.specificDocDetails[0].state} ${st.specificDocDetails[0].zipcode}</p>
          </div>
        </section>

        <section class="docProfileCenter">
          <div>
          <div>
            <p><span class="docBold">Bio: </span>${st.specificDocDetails[0].bio}</p>
            <p><span class="docBold">Education: </span>${st.specificDocDetails[0].education}</p>
            <p><span class="docBold">Specialties: </span>${st.specificDocDetails[0].specialties}</p>
            <p><span class="docBold">Insurance(s) accepted: </span>${st.specificDocDetails[0].insurance}</p>
            <p><span class="docBold">Patient rating: </span>${st.specificDocDetails[0].rating}</p>
            <p><span class="docBold">Accepting New Patients: </span>${st.specificDocDetails[0].accepting}</p>
            <br>
            <br>
            <br>
            <br>
          </div>
          <div class="lineOnTop">
            <p><span class="docBold">Office Name: </span>${st.specificDocDetails[0].officeName}</p>
            <p><span class="docBold">Phone: </span>${st.specificDocDetails[0].phone}</p>
          </div>
          </div>

          <div class="splitPhoto">
          <div>
            <p><span class="docBold">Location:</span><br>${st.specificDocDetails[0].address}<br>${st.specificDocDetails[0].city}, ${st.specificDocDetails[0].state} ${st.specificDocDetails[0].zipcode}</p>
          </div>

          <div>
            <img class="profileImg" src="https://raw.githubusercontent.com/Ezmapel/SPA-capstone-SPA/master/pics/map.png">
            </div>
        </section>
    </section>

<section class="availabilityHeader">
<div class="availabilityHeaderTitle">
<h2>Availability Calendar</h2>
</div>

  <section class="day">

  <section class="dayOne">
    <div id="Slot 1" class="calendar1">Slot 1</div>
    <div id="Slot 2" class="calendar1">Slot 2</div>
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

  <div class="centerMiddleBottom">
  <button class="navInApp patientSkejit">Make appointment!</button>
  </div>

  </section>

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

{
  /* <div id="slotOne" class="timeSlot"></div>
<div id="slotTwo" class="timeSlot"></div>
<div id="slotThree" class="timeSlot"></div> */
}
