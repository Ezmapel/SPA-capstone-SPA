export default st => `<button class="login patientPortal">Back</button>
<h2 class="showMe">${st.Header}</h2>
<button class="patientViewDoc">Read more about this Doctor</button>
<button class="patientSkejit">Make appointment!</button>`;

// button that allows user to go to patientPortal from this page can't be there when a user is simply searching without being logged in...same for the other two browseRegion browseType
