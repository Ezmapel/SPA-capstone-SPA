export default (st) => `<section id="allSearchResults">
<div class="underNav">
<button class="navInApp home"><-</button>
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
    <button id="${result.email}" class="searchResultButton patientViewDocGuest">Read more about this doctor!</button>
    <button class="searchResultButton createUserPatient">Want to make an appointment? Create An Account!</button>
    </div>

    </div>
  </div>`;
}
