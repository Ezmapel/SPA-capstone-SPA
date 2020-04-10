export default (st) => `<section id="allSearchResults">
<div class="underNav">
<button class="navInApp patientPortal"><--</button>
<button id="userLoggedIn"></button>
</div>

<h2 class="showMe">${st.Header}</h2>

${st.results.map((result) => formatResults(result)).join("")}
</section>`;

function formatResults(result) {
  return `
  <div class="individualSearchResult">
    <div class="split">
    <div>
    <p class="docBold">${result.firstName} ${result.lastName}, MD (Not a real doctor)</p>
    <p>Specialty: ${result.specialty}</p>
    <p>Rating: ${result.rating}</p>
    <p class="specificDocHidden">${result.lastName}${result.firstName}</p>
    </div>

    <div>
    <p class="docBold">Location:</p>
    <p>${result.address}</p>
    <p>${result.city}, ${result.state}</p>
    </div>

    </div>

    <div class="splitBottom">
    <div class="searchButtons">
    <p class="acceptingPatients">Accepting New Patients: ${result.accepting}</p>
    </div>

    <div class="searchButtons">
    <button id="${result.email}" class="searchResultButton patientViewDoc">Read more/Make an appointment!</button>
    </div>

    </div>
  </div>`;
}

// function formatResults(result) {
//   return `
//   <div class="blog-post">
//     <h4>${capitalize(result.title)} by User ${result.userId}</h4>
//     <p>${capitalize(result.body)}</p>
//   </div>`;
// }

// export default (st) => `
// <div class="underNav">
// <button class="navInApp patientPortal"><--</button>
// <button id="userLoggedIn"></button>
// </div>

// <h2 class="showMe">${st.Header}</h2>

// <div id="slotOne" class="timeSlot"></div>
// <div id="slotTwo" class="timeSlot"></div>
// <div id="slotThree" class="timeSlot"></div>

// <button class="navInApp patientViewDoc">Read more about this Doctor</button>
// <button class="navInApp patientSkejit">Make appointment!</button>`;
