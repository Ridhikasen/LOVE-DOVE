const questions = [
      {
    question: "Whose your fav. HOOMAN 😙?",
    options: ["YOU", "ONLY YOU", "NO ONE OTHER THAN U", "OFC YOU!"],
    correctAnswers: ["YOU", "ONLY YOU", "NO ONE OTHER THAN U", "OFC YOU!"],
    condition: () => true,
    successMsg: "You're right, sweetie!"
  },
      {
        question: "Where did we go on our first date?",
        options: ["Cafe", "Amusement park", "Mountains", "Movie theater"],
        answer: "Cafe",
        condition: () => true,
        successMsg: "Keep going, Bacche"
      },
      {
        question: "What's my favorite thing about you?",
        options: ["Your smile", "Your sense of humor", "Whole you", "Your kindness"],
        answer: "Whole you",
        condition: () => true,
        successMsg: "Well done, my love!"
      },
      {
        question: "Which song reminds me of you?",
        options: ["Humraah from Malang", "Makhna from Drive", "Duniya", "Barbadiyaan" , "Tum hi ho Bandhu "],
        correctAnswers:["Humraah from Malang", "Makhna from Drive", "Duniya", "Barbadiyaan" , "Tum hi ho Bandhu "],
        condition: () => true,
        successMsg: "You're amazing!"
      },
      {
        question: "What's our go-to comfort food?",
        options: ["Chocolates", "Ice cream", "Lolipops", "Pasta"],
        answer: "Chocolates",
        condition: () => true,
        successMsg: "Yesss! You're doing great!"
      },
      {
        question: "What's my height?",
        options: ["4'10", "5'1", "5", "4'11"],
        answer: "5",
        condition: () => true,
        successMsg: "Keep it up, love!"
      },
      {
        question: "How do I like to spend our weekends?",
        options: ["Watching movies at home", "Going on outings", "Exploring new restaurants", "Visiting museums"],
        answer: "Going on outings",
        condition: () => true,
        successMsg: "You're right, sweetie!"
      },
      {
        question: "What's my favorite way to receive affection?",
        options: ["Hugs", "Compliments", "Acts of service", "Quality time"],
        answer: "Hugs",
        condition: () => true,
        successMsg: "Aww, you know me so well!"
      },
      {
        question: "What's our vibe?",
        options: ["High Five!", "Just a wink!", "Bro code!🤜🤛", "THUMKA!"],
        answer: "Bro code!🤜🤛",
        condition: () => true,
        successMsg: "Haha, that's it!"
      },
      {
        question: "What's the best part of our relationship?",
        options: ["Our communication", "Our adventures together", "Our support for each other","Everything" ,"Our shared dreams"],
        answer: "Everything",
        condition: () => true,
        successMsg: "You're the best!"
      },
       {
    question: "Do you like surprises? 🎁",
    options: ["Yes", "Of course!", "Duhh", "Love them"],
    correctAnswers: ["Yes", "Of course!", "Duhh", "Love them"],
    condition: () => true,
    successMsg: "Yay! Here's one coming up!"
  }
    ];

    let currentQuestion = 0;
    let score = 0;

    const introScreen = document.getElementById("introScreen");
    const cloudsContainer = document.getElementById("cloudsContainer");
    const bowsScreen = document.getElementById("bowsScreen");
    const quizScreen = document.getElementById("quizScreen");
    const resultScreen = document.getElementById("resultScreen");
    const loveSong = document.getElementById("loveSong");
    const giftBox = document.getElementById("giftBox");

    document.getElementById("startBtn").onclick = () => {
      introScreen.style.display = "none";
      launchCloudAnimation();
    };

    document.getElementById("beginQuizBtn").onclick = () => {
      bowsScreen.style.display = "none";
      quizScreen.style.display = "flex";
      showQuestion();
    };

    function launchCloudAnimation() {
      for (let i = 0; i < 3; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.style.top = `${20 + i * 10}%`;
        cloud.style.animationDuration = `${1.5 + i}s`;
        cloudsContainer.appendChild(cloud);
      }

      setTimeout(() => {
        cloudsContainer.innerHTML = "";
        bowsScreen.style.display = "flex";
      }, 2000);
    }

    function showQuestion() {
      const q = questions[currentQuestion];
      const questionText = document.getElementById("questionText");
      const optionsDiv = document.getElementById("options");
      const feedback = document.getElementById("feedback");

      questionText.textContent = q.question;
      optionsDiv.innerHTML = "";
      feedback.textContent = "";

      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "answerBtn";
        btn.textContent = opt;

        btn.onclick = () => {
  const isCorrect = Array.isArray(q.correctAnswers)
    ? q.correctAnswers.includes(opt)
    : opt === q.answer;

  const conditionPassed = q.condition();

  if (isCorrect && conditionPassed) {
    btn.classList.add("correct");
    feedback.textContent = q.successMsg;
    feedback.classList.add("celebration");
    score++;
    disableButtons();
    setTimeout(nextQuestion, 2000);
  } else {
    btn.classList.add("wrong");
    feedback.textContent = "SAD";
    disableButtons();
    setTimeout(nextQuestion, 2000);
  }
};

        optionsDiv.appendChild(btn);
      });
    }


    function disableButtons() {
      const allBtns = document.querySelectorAll(".answerBtn");
      allBtns.forEach(btn => btn.disabled = true);
    }

    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      quizScreen.style.display = "none";
      resultScreen.style.display = "flex";
      document.getElementById("scoreMessage").textContent =
        `You scored ${score} out of ${questions.length}. Great job, love bug! 💖 
        Now take a screenshot of scores and send it to them 😉`;

        confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  function fireConfetti() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

    }

