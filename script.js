// =============================
// PROF SAM ONLINE CLASS TEST
// =============================

// 50 Physics questions (Quantities)
const questions = [
  { q: "Which of the following is a fundamental quantity?", options: ["Volume","Density","Length","Force"], answer: 2 },
  { q: "Which of the following is not a fundamental quantity?", options: ["Mass","Time","Temperature","Pressure"], answer: 3 },
  { q: "Derived quantities are obtained from:", options: ["Scalar quantities","Fundamental quantities","Physical constants","Dimensionless quantities"], answer: 1 },
  { q: "How many fundamental quantities are recognized in mechanics?", options: ["5","6","7","8"], answer: 2 },
  { q: "The S.I. unit of time is:", options: ["Minute","Hour","Second","Millisecond"], answer: 2 },
  { q: "Force is a:", options: ["Scalar quantity","Derived quantity","Fundamental quantity","Constant"], answer: 1 },
  { q: "Which of the following is a vector quantity?", options: ["Speed","Work","Distance","Velocity"], answer: 3 },
  { q: "The S.I. unit of mass is:", options: ["Kilogram","Gram","Pound","Newton"], answer: 0 },
  { q: "Energy is measured in:", options: ["Watt","Joule","Newton","Pascal"], answer: 1 },
  { q: "Which of these is a scalar quantity?", options: ["Force","Displacement","Temperature","Momentum"], answer: 2 },
  { q: "The derived unit of pressure is:", options: ["kg/m³","N/m²","J/s","m/s²"], answer: 1 },
  { q: "Work done =", options: ["Force × Power","Mass × Velocity","Force × Distance","Energy / Time"], answer: 2 },
  { q: "Which has both magnitude and direction?", options: ["Energy","Speed","Force","Distance"], answer: 2 },
  { q: "Volume is derived from which fundamental quantity?", options: ["Mass","Length","Time","Temperature"], answer: 1 },
  { q: "Which of these is not a derived quantity?", options: ["Area","Velocity","Time","Force"], answer: 2 },
  { q: "Acceleration is the rate of change of:", options: ["Distance","Displacement","Velocity","Force"], answer: 2 },
  { q: "The dimensional formula of force is:", options: ["MLT⁻¹","MLT⁻²","ML²T⁻³","ML⁻¹T²"], answer: 1 },
  { q: "Which is the correct unit for density?", options: ["kg/m³","N/m²","m³/kg","J/s"], answer: 0 },
  { q: "Momentum =", options: ["Force × Time","Mass × Acceleration","Energy × Time","Pressure × Volume"], answer: 0 },
  { q: "Which quantity measures rate of doing work?", options: ["Energy","Power","Force","Velocity"], answer: 1 },
  { q: "A quantity with magnitude only is:", options: ["Vector","Scalar","Derived","Base"], answer: 1 },
  { q: "Displacement is a:", options: ["Scalar","Vector","Derived","Base"], answer: 1 },
  { q: "Which of these is a base quantity?", options: ["Volume","Electric current","Force","Density"], answer: 1 },
  { q: "S.I. unit of electric current:", options: ["Coulomb","Volt","Ampere","Ohm"], answer: 2 },
  { q: "Speed and velocity differ because velocity has:", options: ["Magnitude only","Direction","No unit","Constant value"], answer: 1 },
  { q: "Force is measured in:", options: ["Newton","Joule","Watt","Pascal"], answer: 0 },
  { q: "The S.I. unit of energy is:", options: ["Watt","Joule","Newton","Volt"], answer: 1 },
  { q: "Which of these is a scalar?", options: ["Displacement","Speed","Force","Acceleration"], answer: 1 },
  { q: "Distance is a:", options: ["Vector","Scalar","Derived","Base"], answer: 1 },
  { q: "Which of these is derived from length and time?", options: ["Speed","Mass","Temperature","Current"], answer: 0 },
  { q: "Density is a derived quantity from:", options: ["Mass/Volume","Mass×Volume","Force/Area","Energy/Time"], answer: 0 },
  { q: "Acceleration unit in SI:", options: ["m/s²","m/s","m²/s","N"], answer: 0 },
  { q: "Work = Force × ?", options: ["Time","Distance","Velocity","Mass"], answer: 1 },
  { q: "Power = ?", options: ["Work/Time","Energy × Time","Force × Velocity","Mass × Acceleration"], answer: 0 },
  { q: "The S.I. unit of pressure is:", options: ["Pa","J","N","W"], answer: 0 },
  { q: "Velocity unit in SI:", options: ["m/s","m/s²","N","Pa"], answer: 0 },
  { q: "Momentum unit in SI:", options: ["kg·m/s","kg·m²/s²","N","Pa"], answer: 0 },
  { q: "Force is vector because it has:", options: ["Magnitude only","Direction only","Magnitude and Direction","None"], answer: 2 },
  { q: "Energy is a:", options: ["Scalar","Vector","Base","Derived"], answer: 0 },
  { q: "Temperature unit in SI:", options: ["Kelvin","Celsius","Fahrenheit","Joule"], answer: 0 },
  { q: "Length unit in SI:", options: ["Meter","Kilogram","Second","Ampere"], answer: 0 },
  { q: "Time is a:", options: ["Derived","Base","Vector","Scalar"], answer: 1 },
  { q: "Velocity is derived from:", options: ["Distance/Time","Force/Area","Mass × Acceleration","Energy/Time"], answer: 0 },
  { q: "Displacement unit in SI:", options: ["Meter","Second","Kilogram","Newton"], answer: 0 },
  { q: "Area is derived from:", options: ["Length²","Mass × Length","Force × Distance","Energy/Time"], answer: 0 },
  { q: "Volume is derived from:", options: ["Length³","Mass × Time","Force × Distance","Area × Time"], answer: 0 },
  { q: "Work is measured in:", options: ["Joule","Newton","Pascal","Watt"], answer: 0 },
  { q: "Power is measured in:", options: ["Watt","Joule","Newton","Pascal"], answer: 0 },
  { q: "Force × Distance gives:", options: ["Work","Power","Energy/Time","Momentum"], answer: 0 },
  { q: "Pressure = Force ÷ ?", options: ["Area","Volume","Mass","Time"], answer: 0 },
  { q: "Velocity and Speed differ because velocity has:", options: ["Magnitude","Direction","Unit","None"], answer: 1 },
  { q: "Scalar quantity examples include:", options: ["Speed, Mass, Temperature","Velocity, Force, Displacement","Acceleration, Momentum","Force, Pressure, Velocity"], answer: 0 },
  { q: "Vector quantity examples include:", options: ["Displacement, Force, Velocity","Speed, Mass, Temperature","Energy, Work, Power","Density, Volume, Temperature"], answer: 0 }
];

// ================== DOM references ==================
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");
const timerDisplay = document.getElementById("timer");
const questionCount = document.getElementById("questionCount");

let currentIndex = 0;
let answers = new Array(questions.length).fill(null);
let timeLeft = 20 * 60; // 20 minutes
let leaveCount = 0;
let timer;

// ================== START TEST ==================
document.getElementById("startBtn").addEventListener("click", () => {
  const code = document.getElementById("examCode").value.trim();
  if (!code) return alert("Please enter your Exam Code.");

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  displayQuestion();
  startTimer();
  monitorTabLeave(code);
});

// ================== DISPLAY QUESTION ==================
function displayQuestion() {
  const q = questions[currentIndex];
  questionContainer.innerHTML = `
    <h3>${currentIndex + 1}. ${q.q}</h3>
    ${q.options
      .map((opt, i) => 
        `<div class="option ${answers[currentIndex] === i ? 'selected' : ''}" onclick="selectOption(${i})">${opt}</div>`
      )
      .join('')}
  `;
  questionCount.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.classList.toggle("hidden", currentIndex === questions.length - 1);
  submitBtn.classList.toggle("hidden", currentIndex !== questions.length - 1);
}

function selectOption(i) {
  answers[currentIndex] = i;
  displayQuestion();
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    displayQuestion();
  }
});
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuestion();
  }
});

submitBtn.addEventListener("click", submitExam);

// ================== TIMER ==================
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerDisplay.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("⏰ Time up! Your test has been submitted automatically.");
      submitExam();
    }
  }, 1000);
}

// ================== ANTI-CHEAT ==================
function monitorTabLeave(code) {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      leaveCount++;
      if (leaveCount === 1) {
        alert("⚠️ Warning: Leaving this page again will submit your test!");
      } else if (leaveCount === 2) {
        alert("🚫 You left the page again. Test submitted automatically.");
        submitExam(code);
      }
    }
  });
}

// ================== SUBMIT ==================
function submitExam(code) {
  clearInterval(timer);
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let score = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.answer) score++;
  });
  const percent = Math.round((score / questions.length) * 100);

  let rating = "";
  if (percent >= 90) rating = "Excellent 🏆";
  else if (percent >= 70) rating = "Very Good 💪";
  else if (percent >= 50) rating = "Fair 🙂";
  else rating = "Try Again 😔";

  document.getElementById("result-message").textContent = "PROF SAM WANTS THE BEST, SO DO YOUR BEST!";
  document.getElementById("exam-code-display").textContent = `Exam Code: ${document.getElementById("examCode").value}`;
  document.getElementById("score-display").textContent = `Score: ${percent}%`;
  document.getElementById("rating-display").textContent = `Rating: ${rating}`;
}
