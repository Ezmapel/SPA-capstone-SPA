export default st => `<h2 class="showMeNoButton">${st.Header}</h2>

<form class="doctorProfile">
<div class="doctorFormItem">
  <label class="doctorFormItem">First name:</label><input type="text" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Last name:</label><input type="text" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Name of your practice:</label><input type="text" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Name of med school you attended:</label><input type="text" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Tell us a bit about your practice:</label><input type="text" style="width: 60%" required>
</div>

<div class="doctorFormItem">
  <label class="doctorFormItem">Name of Med School You Attended:</label><input type="text" required>
</div>

</form>
<button class="navInApp docPortal">Save</button>`;
