// store individual questions as objects
class Question {
  constructor(question, optionA, optionB, optionC, optionD, correctAnswer) {
    this.question = question;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.correctAnswer = correctAnswer;
  }
}

const question1 = new Question(
  "Which character currently possesses the power of the Flame-Flame fruit?",
  "Luffy",
  "Ace",
  "Sabo",
  "Akainu",
  "C"
);
const question2 = new Question(
  'Which Whitebeard Pirates division commander is known as "the Phoenix"?',
  "Rakuyo",
  "Marco",
  "Jozu",
  "Izo",
  "B"
);
const question3 = new Question(
  "Which Straw Hat Pirate's favorite drink is Cola?",
  "Brooke",
  "Nami",
  "Zoro",
  "Franky",
  "D"
);
const question4 = new Question(
  "What is the current value of Luffy's bounty?",
  "1.5 billion",
  "150 million",
  "500 million",
  "1 billion",
  "A"
);
const question5 = new Question(
  "In what region was Gol D. Roger born?",
  "North Blue",
  "East Blue",
  "South Blue",
  "West Blue",
  "B"
);
const question6 = new Question(
  "Which of the following is NOT a type of Haki?",
  "Kenbunshoku - Observation",
  "Busoshoku - Armament",
  "Haoshoku - Conquerer's",
  "Kamishoku - Divinity",
  "D"
);
const question7 = new Question(
  "What is the name of the village Luffy was born in?",
  "Cocoyashi",
  "Syrup",
  "Foosha",
  "Shimotsuki",
  "C"
);
const question8 = new Question(
  "What was the name of the zombie that possessed Brook's Shadow during the Thriller Bark arc?",
  "Ryuma",
  "Absolam",
  "Kyoshiro",
  "Orochi",
  "A"
);
const question9 = new Question(
  "Which one of these swords does NOT belong to Zoro?",
  "Wado Ichimonji",
  "Shusui",
  "Sandai Kitetsu",
  "Kikoku",
  "D"
);
const question10 = new Question(
  "Which pirate has the largest bounty in the One Piece world?",
  "Luffy",
  "Shanks",
  "Marshall D. Teech",
  "Charlotte Katakuri",
  "C"
);
const question11 = new Question(
  "Which member of the Supernovas has the the powers of an Ancient Zoan-type Devil Fruit?",
  "Basil Hawkins",
  "Urouge",
  "X Drake",
  "Marshall D. Teech",
  "C"
);
const question12 = new Question(
  "How many of the eleven Supernovas are ship captains?",
  "11",
  "10",
  "9",
  "8",
  "C"
);
const question13 = new Question(
  "Which of these characters never held the title of one of the 'Seven Warlords of the Sea'",
  "Blackbeard",
  "Jinbei",
  "Crocodile",
  "Whitebeard",
  "D"
);
const question14 = new Question(
  "Which of the eleven Supernovas was kidnapped by Blackbeard?",
  "Scratchmen Apoo",
  "Basil Hawkins",
  "Urouge",
  "Jewelry Bonney",
  "D"
);
const question15 = new Question(
  "What is the only devil fruit that Sanji is interested in obtaining?",
  "Mera Mera no Mi - Fire",
  "Suke Suke no Mi - Invisibility",
  "Horu Horu no Mi - Hormones",
  "Mero Mero no Mi - Love",
  "B" 
);
const question16 = new Question(
  "What is the name of the Kingdom led by the Vinsmoke Family?",
  "Germa Kingdom",
  "Goa Kingdom",
  "Sakura Kingdom",
  "Ryugyu Kingdom",
  "A"
);
const question17 = new Question(
  "Which of the following is NOT a nickname of Brooks?",
  "Gentlemen Skeleton",
  "Dead Bones",
  "Humming Swordsman",
  "Undead Poet",
  "D"
);
const question18 = new Question(
  "What is the name of the tree whose wood was used to build the Thousand Sunny?",
  "The Moses Tree",
  "The Adam Tree",
  "The Eve Tree",
  "The Jacob Tree",
  "B"
);
const question19 = new Question(
  "What was the alias that Princess Vivi used while infiltrating Baroque Works?",
  "Miss All-Sunday",
  "Miss Monday",
  "Miss Wednesday",
  "Miss Goldenweek",
  "C"
);
const question20 = new Question(
  "Which Marine Admiral was responsible for Ace's death?",
  "Sengoku",
  "Akainu",
  "Kizaru",
  "Aokiji",
  "B"
);
const question21 = new Question(
  "Which character does not possess Conqueror's Haki?",
  "Boa Hancock",
  "Red-haired Shanks",
  "Donquixote Doflamingo",
  "Monkey D. Garp",
  "D"
);
const question22 = new Question(
  "Which of these is NOT a form of Luffy's Gear Four?",
  "Speedman",
  "Boundman",
  "Tankman",
  "Snakeman",
  "A"
);
const question23 = new Question(
  "Which one of these is NOT the name of one of the three ancient weapons?",
  "Pluton",
  "Saturn",
  "Poseidon",
  "Uranus",
  "B"
);
const question24 = new Question(
  "What was the codename used by Robin when she was an agent of Baroque Works?",
  "Miss Valentine",
  "Miss Goldenweek",
  "Miss All-Sunday",
  "Miss Valentine",
  "C"
);
const question25 = new Question(
  "What is the most powerful grade of sword in the world of One Piece?",
  "Saijo O Wazamono",
  "O Wazamono",
  "Ryo Wazamono",
  "Wazamono",
  "A"
);


// store question objects in an array
const questionsArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18,
  question19,
  question20,
  question21,
  question22,
  question23,
  question24,
  question25
];

// quiz variables
let score = 0;
let currentQuestion = 0;
let submitClicks = -1;

// display question
function displayQuestion() {
  document.querySelector(".question").textContent =
    questionsArray[currentQuestion].question;
  document.querySelector(
    ".option_a"
  ).textContent = `a. ${questionsArray[currentQuestion].optionA}`;
  document.querySelector(
    ".option_b"
  ).textContent = `b. ${questionsArray[currentQuestion].optionB}`;
  document.querySelector(
    ".option_c"
  ).textContent = `c. ${questionsArray[currentQuestion].optionC}`;
  document.querySelector(
    ".option_d"
  ).textContent = `d. ${questionsArray[currentQuestion].optionD}`;
}

// display correct or incorrect


// clear radio buttons
function clearRadios() {
  const radioButtonArray = document.getElementsByName("quiz");

  for (var i = 0; i < radioButtonArray.length; i++) {
    let radioButton = radioButtonArray[i];
    radioButton.checked = false;
  }
}

// initialize new quiz
initialize();

// on submit click
document.querySelector(".submit").addEventListener("click", () => {
  let selected, answer;
  // track number of times submit has been clicked
  submitClicks++

  // read value of selected answer
  selected = document.querySelector('input[name="quiz"]:checked');

  if (selected !== null) {
    answer = selected.value;
  } else {
    alert("please select an answer");
  }

  // compare value of submitted answer to value of correct answer
  // if answer is correct
  if (answer === questionsArray[currentQuestion].correctAnswer) {
    // display 'correct!'
    document.querySelector(".question").textContent = "CORRECT ANSWER!";

    // increase score
    score++;

  } else {
    // display the correct answer
    document.querySelector(
      ".question"
    ).textContent = `Sorry, the correct answer is: ${questionsArray[currentQuestion].correctAnswer}`;
  }

  // update score on UI
  document.querySelector(".score").textContent = `Current Score: ${score}`;
});

// on 'next' button click
document.querySelector(".next").addEventListener("click", () => {
  selected = document.querySelector('input[name="quiz"]:checked');
  // as long as previous question has been answered
  if (submitClicks === currentQuestion) {
    // clear radio buttons
    clearRadios();

    currentQuestion++;

    // if all questions have been answered
    if (currentQuestion >= questionsArray.length) {
      let title;

      // hide quiz and display final score
      document.querySelector(
        ".question"
      ).textContent = `Your final score is: ${score} / 25`;
      document.querySelector(".question").classList.toggle("end-score");
      document.querySelector(".answer-box").style.display = "none";
      document.querySelector(".button-wrap").style.display = "none";

      // award title based on score range
      if (score > 23) {
        title = "One Piece Master";
      } else if (score >= 20) {
        title = "Yonko";
      } else if (score >= 17) {
        title = "Shichibukai";
      } else if (score >= 15) {
        title = "Admiral";
      } else if (score >= 12) {
        title = "Captain";
      } else if (score >= 8) {
        title = "Seaman";
      } else {
        title = "Chore Boy";
      }

      // display title
      document.querySelector(".score-box").style.display = "none";
      document.querySelector(".award-title").style.display = "block";
      document.querySelector(
        ".award-title"
      ).textContent = `Your title is: ${title}`;

      // if all question have not yet been answered
    } else {
      // display new question
      displayQuestion();
    }

  } else {
    alert("please select an answer and hit 'Submit'");
  }
});

// initialization function
function initialize() {
  if (currentQuestion > 0) {
    currentQuestion = 0;
  }

  document.querySelector(".award-title").style.display = "none";

  displayQuestion();
}
