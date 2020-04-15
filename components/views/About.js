export default (st) => `
<div class="underNav">
<button class="navInApp home"><-</button>
<button id="userLoggedIn"></button>
</div>

<div class="aboutCenter">
  <h2 class="showMe">${st.Header}</h2>

  <div class="aboutHighlight">
  <h2 class="underConstructionHeader">IMPORTANT: April, 2020</h2>

  <p class="aboutText">In light of the ongoing COVID-19 situation, I want to be very clear that THIS IS NOT A LEGITIMATE DOCTOR-SCHEDULING APPLICATION. It is NOT yet developed for use by either doctors or patients. Any profiles listed on the “Browse Doctors” page are either example-profiles or profiles that have not been verified in any way. Any listed “Doctors” should NOT be expected to follow through on any scheduled appointment, and should NOT be consulted for medical advice WHATSOEVER. If there is any confusion about that, please reach out for clarification via the contact form below. Stay healthy.</p>
  </div>

  <h2 class="underConstructionHeader">About Me</h2>

  <p class="aboutText">TL;DR My name is Ethan Mapel and this is a Single Page Application I built as a practice project to develop my coding skills. It uses HTML, CSS, JavaScript, and Firebase to create a doctor/patient scheduling app.</p>

  <p class="aboutText">I have been learning HTML, CSS, and JavaScript since January of 2020, and have utilized those three languages to create this scheduling application. It essentially serves as a doctor/patient portal, allowing for a doctor to login to the “Doctor Portal” and create a schedule of availability. A patient can then log-in on the “Patient Portal” side to book an appointment with a listed doctor.</p>

  <p class="aboutText">The login functionality, doctor profile information, and scheduling calendar is powered on the back-end by Firebase. Using Javascript, I wrote code to communicate with Firebase, including reaching out to Google Authentication to handle the login. The Cloud Firestore database then houses the doctor profile info (Skejit reaches out to Firestore when you first load the web app, stores the Firestore doctor profile info in the app’s “state,” and renders that info on the appropriate pages). The calendar of availability communicates with Firebase’s Realtime Database, showing a doctor’s availability “to-the-second,” so to speak. For instance, if a patient booked an appointment with Doctor A, any other user (anywhere in the world) who was looking at Doctor A’s calendar would see that time slot blink out of existence...they don’t need to reload the page, it would update automatically, thanks to the features of Realtime Database and the JavaScript I wrote to access those features.</p>

  <p class="aboutText">Ultimately, I built this project to learn about using HTML, CSS, JavaScript, and databases in a functional website. I aim to use these skills to build other web applications (personal projects I have on the ol’ brain), as well as further develop this web app. I believe Skejit could allow smaller scale doctor’s offices (or other professionals...really anyone with scheduling needs) to handle scheduling easily with predetermined bookable time-slots.</p>

</div>

  <h2 class="underConstructionHeader">If you have questions, comments, or would like to get in touch for any reason, please fill out the contact form below:</h2>

  <div class="loginBox">
      <h2 class="border lightText">Contact:</h2>
      <input id="contactFirst" class="signin" placeholder="Your First Name*">
      <input id="contactLast" class="signin" placeholder="Your Last Name*">
      <input id="contactEmail" class="signin" placeholder="Your Email*" type="text" >
      <input id="contactPhone" class="signin" placeholder="Your Phone" type="text" >
      <br>

      <textarea id="contactComment" class="signin" placeholder="Your Comment*" type="text" rows="8" cols="50"></textarea>

      <button class="login contactSubmitted">Submit</button>
</div>`;
