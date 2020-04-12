export default () => `
<div class="underNav">
<button class="hiddenButton"></button>
<button id="userLoggedIn"></button>
</div>

<section id="jumbotronHome">
<header class="header">
<h1>Skejit</h1>
</header>

<div class="loginBox">
<h2 class="border">Sign in</h2>
<input id="user" class="signin" placeholder="Email" required>
<input id="pass" class="signin" placeholder="Password" type="password" required>
<button id="loginHome" class="login">Login</button>

<div class="noaccount">
  <h2>Don't have an account?</h2>
</div>

<div class="buttonGroup">
  <button class="buttons accountType">Register now</button>
  <p>OR</p>
  <button class="buttons searchResultsGuest">Browse Doctors</button>
</div>
</div>
</section>`;

// export default () => `<header class="header">
// <h1>Skejit</h1>
// </header>

// <div class="loginBox">
// <h2 class="border">Sign in</h2>
// <input class="signin" placeholder="Username">
// <input class="signin" placeholder="Password" type="password">
// <button class="login">Login</button>

// <div class="noaccount">
//   <h2>Don't have an account?</h2>
// </div>

// <div class="buttonGroup">
//   <button id="newAccount" class="buttons">Register now</button>
//   <p>OR</p>
//   <button class="buttons">Browse Doctors</button>
// </div>
// </div>`;
