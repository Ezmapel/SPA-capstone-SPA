export default () => `<div class="center">
<h1>Create Your Username/Password:</h1>
</div>

<div class="loginBox">
<h2 class="border">Select your login info:</h2>
<input class="signin" placeholder="Username">
<input class="signin" placeholder="Password" type="password">
<input class="signin" placeholder="Confirm Password" type="password">
<button onclick="window.location.href = './create-doc.html'; " class="login">Create</button>
</div>`;
