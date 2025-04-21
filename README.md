 Fitness Tracker Web App

Fitness Tracker is a simple fitness tracker web application that integrates with Google Fit API to retrieve fitness and health data such as step count, calories burned, and heart rate. It’s built using HTML, CSS, and JavaScript, and uses Google OAuth 2.0 for authentication.

 Features

-Google OAuth 2.0 Sign-In
-Randomised Sample Fitness Stats
-Line Chart showing step trends using Chart.js
-Responsive UI with clean design
-Login/Logout session handling via localStorage

Technologies Used

-HTML, CSS, JavaScript
-Google OAuth 2.0 + Google Fit API scopes
-Hosted via vercel

Google API Setup

1 Go to [Google Cloud Console](https://console.cloud.google.com/).
2 Create a project and configure OAuth consent screen.
3.Add `http://localhost:5500` or your deployed domain as:
   -Authorized JavaScript Origins
   -Authorized Redirect URIs(`http://localhost:5500/auth.html`)
4 Enable Fitness API.
5 Replace `CLIENT_ID` in `app.js` with your OAuth 2.0 client ID.
 
Project Structure:
fitness-tracker
1. index.html         Main UI for login and data display
2. auth.html          Handles OAuth redirect and token storage
3. style.css          Styling and layout
4. app.js             Core app logic
5. README.md          Project overview

Deployment -via Vercel


Author

Prattoy Paban Dhar– CSE Student, Rangamati Science and Technology University.
Md. Arifuzzaman Chy- CSE Student, Rangamati Science and Technology University.
