// Login.js
const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";
const REDIRECT_URI = "http://localhost:3000/oauth2callback";

function handleLogin() {
  window.location = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/drive.file`;
}
