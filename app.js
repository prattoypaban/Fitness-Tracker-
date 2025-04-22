/*Course Name: Web Engineering Lab 
Course code: CSE 3106
Instructor: 
Md. Mynoddin
Assistant Professor.
Department of CSE,
Rangamati Science and Technology University.
*/
const CLIENT_ID = "1008012467806-stammm8jg3v607fhjlau798kfjqaa6ia.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.heart_rate.read https://www.googleapis.com/auth/userinfo.email";
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

loginBtn.addEventListener("click", () => {
  const redirectUri = `${window.location.origin}/auth.html`;
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token&scope=${encodeURIComponent(SCOPES)}`;
  window.location.href = authUrl;
});

window.onload = async () => {
  const token = localStorage.getItem("google_token");

  if (!token) {
    loginBtn.style.display = "inline-block";
    logoutBtn.classList.add("hidden");
    return;
  }

  document.getElementById("loginCard").classList.add("hidden");
  document.getElementById("dataCard").classList.remove("hidden");

  const emailResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const emailData = await emailResponse.json();
  document.getElementById("userEmail").textContent = emailData.email;

  const randomSteps = Math.floor(Math.random() * 10000);
  const randomCalories = Math.floor(Math.random() * 500);
  const randomHeartRate = Math.floor(Math.random() * (180 - 60 + 1)) + 60;

  document.getElementById("steps").textContent = randomSteps;
  document.getElementById("calories").textContent = randomCalories;
  document.getElementById("heartRate").textContent = randomHeartRate;

  // Create chart data (7 random days)
  const stepData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10000));
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const ctx = document.getElementById("stepsChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Steps Over the Last 7 Days",
        data: stepData,
        borderColor: "#4285F4",
        backgroundColor: "rgba(66, 133, 244, 0.2)",
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: "#4285F4"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 2000
          }
        }
      }
    }
  });
};

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("google_token");
  location.reload();
});



logoutBtn.classList.remove("hidden");

