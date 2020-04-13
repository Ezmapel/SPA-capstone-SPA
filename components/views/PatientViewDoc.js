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
<h2>Click on a time slot to Skejit!</h2>
</div>

  <section class="day">

  <section id="dayOne" class="dayOne">
    <button value="0" id="Monday Slot 1" class="calendar1True bookableAppt"><div class="calendar1">Monday Slot 1</div></button>
    <button value="1" id="Monday Slot 2" class="calendar1True bookableAppt"><div class="calendar1">Monday Slot 2</div></button>
    <button value="2" id="Monday Slot 3" class="calendar1True bookableAppt"><div class="calendar1">Monday Slot 3</div></button>
    <button value="3" id="Monday Slot 4" class="calendar1True bookableAppt"><div class="calendar1">Monday Slot 4</div></button>
    <button value="4" id="Monday Slot 5" class="calendar1True bookableAppt"><div class="calendar1">Monday Slot 5</div></button>
    <button value="5" id="Monday Slot 6" class="calendar1True bookableAppt"><div class="calendar1">Monday Slot 6</div></button>
    <button value="6" id="Monday Slot 7" class="calendar1True bookableAppt"><div class="calendar1">Monday Slot 7</div></button>
    <button value="7" id="Monday Slot 8" class="calendar1True bookableAppt"><div class="calendar1">Monday Slot 8</div></button>
  </section>

  <section id="dayTwo" class="dayTwo">
    <button value="0" id="Tuesday Slot 1" class="calendar2True bookableAppt"><div class="calendar2">Tuesday Slot 1</div></button>
    <button value="1" id="Tuesday Slot 2" class="calendar2True bookableAppt"><div class="calendar2">Tuesday Slot 2</div></button>
    <button value="2" id="Tuesday Slot 3" class="calendar2True bookableAppt"><div class="calendar2">Tuesday Slot 3</div></button>
    <button value="3" id="Tuesday Slot 4" class="calendar2True bookableAppt"><div class="calendar2">Tuesday Slot 4</div></button>
    <button value="4" id="Tuesday Slot 5" class="calendar2True bookableAppt"><div class="calendar2">Tuesday Slot 5</div></button>
    <button value="5" id="Tuesday Slot 6" class="calendar2True bookableAppt"><div class="calendar2">Tuesday Slot 6</div></button>
    <button value="6" id="Tuesday Slot 7" class="calendar2True bookableAppt"><div class="calendar2">Tuesday Slot 7</div></button>
    <button value="7" id="Tuesday Slot 8" class="calendar2True bookableAppt"><div class="calendar2">Tuesday Slot 8</div></button>
  </section>

  <section id="dayThree" class="dayThree">
    <button value="0" id="Wednesday Slot 1" class="calendar3True bookableAppt"><div class="calendar3">Wednesday Slot 1</div></button>
    <button value="1" id="Wednesday Slot 2" class="calendar3True bookableAppt"><div class="calendar3">Wednesday Slot 2</div></button>
    <button value="2" id="Wednesday Slot 3" class="calendar3True bookableAppt"><div class="calendar3">Wednesday Slot 3</div></button>
    <button value="3" id="Wednesday Slot 4" class="calendar3True bookableAppt"><div class="calendar3">Wednesday Slot 4</div></button>
    <button value="4" id="Wednesday Slot 5" class="calendar3True bookableAppt"><div class="calendar3">Wednesday Slot 5</div></button>
    <button value="5" id="Wednesday Slot 6" class="calendar3True bookableAppt"><div class="calendar3">Wednesday Slot 6</div></button>
    <button value="6" id="Wednesday Slot 7" class="calendar3True bookableAppt"><div class="calendar3">Wednesday Slot 7</div></button>
    <button value="7" id="Wednesday Slot 8" class="calendar3True bookableAppt"><div class="calendar3">Wednesday Slot 8</div></button>
  </section>

  <section id="dayFour" class="dayFour">
    <button value="0" id="Thursday Slot 1" class="calendar4True bookableAppt"><div class="calendar4">Thursday Slot 1</div></button>
    <button value="1" id="Thursday Slot 2" class="calendar4True bookableAppt"><div class="calendar4">Thursday Slot 2</div></button>
    <button value="2" id="Thursday Slot 3" class="calendar4True bookableAppt"><div class="calendar4">Thursday Slot 3</div></button>
    <button value="3" id="Thursday Slot 4" class="calendar4True bookableAppt"><div class="calendar4">Thursday Slot 4</div></button>
    <button value="4" id="Thursday Slot 5" class="calendar4True bookableAppt"><div class="calendar4">Thursday Slot 5</div></button>
    <button value="5" id="Thursday Slot 6" class="calendar4True bookableAppt"><div class="calendar4">Thursday Slot 6</div></button>
    <button value="6" id="Thursday Slot 7" class="calendar4True bookableAppt"><div class="calendar4">Thursday Slot 7</div></button>
    <button value="7" id="Thursday Slot 8" class="calendar4True bookableAppt"><div class="calendar4">Thursday Slot 8</div></button>
  </section>

  <section id="dayFive" class="dayFive">
    <button value="0" id="Friday Slot 1" class="calendar5True bookableAppt"><div class="calendar5">Friday Slot 1</div></button>
    <button value="1" id="Friday Slot 2" class="calendar5True bookableAppt"><div class="calendar5">Friday Slot 2</div></button>
    <button value="2" id="Friday Slot 3" class="calendar5True bookableAppt"><div class="calendar5">Friday Slot 3</div></button>
    <button value="3" id="Friday Slot 4" class="calendar5True bookableAppt"><div class="calendar5">Friday Slot 4</div></button>
    <button value="4" id="Friday Slot 5" class="calendar5True bookableAppt"><div class="calendar5">Friday Slot 5</div></button>
    <button value="5" id="Friday Slot 6" class="calendar5True bookableAppt"><div class="calendar5">Friday Slot 6</div></button>
    <button value="6" id="Friday Slot 7" class="calendar5True bookableAppt"><div class="calendar5">Friday Slot 7</div></button>
    <button value="7" id="Friday Slot 8" class="calendar5True bookableAppt"><div class="calendar5">Friday Slot 8</div></button>
  </section>

  </section>

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
