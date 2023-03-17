const question = [
    {
        question: "When did Nigeria gain Independence?",
        a: 1990,
        b: 1995,
        c: 1960,
        d: 1985,
        correct: "c",
    },
    {
        question: "Who is Nigeria's First Prime Minister?",
        a: "Tafawa Balewa",
        b: "Muhamadu Buhari",
        c: "Ernest Shoneko",
        d: "Goodluck Jonathan ",
        correct: "a",
    },
    { 
        question: "Who was the first senate president of the fourth republic?",
        a: "Nnamdi Azikiwe",
        b: "Dennis Osadebay",	
        c: "Evan Enwerem",
        d: "Nwafor Orizu",	
        correct: "c",

    },
    { 
        question: "What was General Babangida's position before becoming presidents?",
        a: "Air-man",
        b: "Police",
        c: "Governor",
        d: "Chief of Army Staff",
        correct: "d",

    },
    { 
        question: "Who captained the Olympic gold medal winning team of 1996?",
        a: "Nwankwo Kanu",
        b: "Jay Jay Okocha",
        c: "Sunday Oliseh",
        d: "steven keshi",
        correct: "a",
    },
    { 
        question: "Whose face is on the 20 Naira Note?",
        a: "Murtala Muhammed",
        b: "Bola Tinubu",
        c: "John Terry",
        d: "Obi wan kanobi",
        correct: "a",
    },
    { 
        question: "What is the capital of Nigeria?",
        a: "Sokoto",
        b: "Lagos",
        c: "abuja",
        d: "Zamfara",
        correct: "c",

    },
    { 
        question: "Which is the official language of Nigeria?",
        a: "tongues",
        b: "English",
        c: "Hebrew",
        d: "Hausa",
        correct: "b",
    },
    { 
        question: "Which water body is close to Nigeria?",
        a: "Gulf of Guinea",
        b: "Pacific Ocean",
        c: "Atlantic Ocean",
        d: "Indian River",
        correct: "a",
    },
    { 
        question: "Who gave Nigeria her name?",
        a: "flora shaw",
        b: "Mary lee",
        c: "Jackie Chang",
        d: "illie Jean",
        correct: "a",

    },
    { 
        question: "Who designed the Nigeria flag?",
        a: "olusegun Obasanja",
        b: "Bob Marley",
        c: "Goodluck Jonathan", 
        d: "taiwo akinkunmi",
        correct: "d",
    },
    { 
        question: "Which region unsuccessfully declared its independence from Nigeria in 1967?",
        a: "Calabar",
        b: "Biafra",
        c: "Sapele",
        d: "Warri",
        correct: "b"

    },
    { 
        question: "Who won the presidential election in 1993 and was imprisoned?",
        a: "Mashood Abiola",
        b: "Abdulsalam Abubakar",
        c: "Olusegun Obasanjo",
        d: "Muhammadu Buhari",
        correct: "a",
    },
    { 
        question: "When did the British formally unite the “Colony and Protectorate of Nigeria”?",
        a: "1885",
        b: "1900",
        c: "1914",
        d: "1918",
        correct: "c",
    },
    { 
        question: "When is National Day in Nigeria?",
        a: "7 April",
        b: "14 June",
        c: "1 October",
        d: "1 November",
        correct: "c",
    },
    { 
        question: "Which is the currency of Nigeria?",
        a: "Rand",
        b: "Naira",
        c: "Pound",
        d: "Dollar",
        correct: "b",
    },
    { 
        question: "Who is the first ruler of Sokoto Caliphate?",
        a: "Dan Fodio",
        b: "Bello",
        c: "Abdullahi",
        d: "Abdul as Salam",
        correct: "a"
    },
    { 
        question: "In which continent, Nigeria is situated?",
        a: "America",
        b: "Africa",
        c: "Australia",
        d: "Asia",
        correct: "b",
    },
    { 
        question: "What do the two horses on the Nigerian coat of arm represent?",
        a: "wealth",
        b: "power",
        c: "strenght",
        d: "Dignity",
        correct: "d",

    },
    { 
        question:  "What was the black shield in the Nigerian coat of arm stand for?",
        a: "Nigerian fertile soil",
        b: "Airport",
        c: "Nigeria Airforce",
        d: "Nigeria Defence",
        correct: "a"

    },
    { 
        question: "What does the green colour in Nigerian flag represent?",
        a: "waterways",
        b: "Forests of Nigeria",
        c: "foodbasket",
        d: "surrender",
        correct: "b",

    },
    { 
        question: "Nigeria is divided into how many geopolitical zones?",
        a: 6,
        b: 7,
        c: 8,
        d: 9,
        correct: "a"

    },
    { 
        question: "What was the first capital city in Nigeria?",

        a: "Kaduna",
        b: "Abuja",
        c: "Lagos",
        d: "Calabar",
        correct: "d",
    },
    { 
        question: "What is the name of Nigerian national men football team?",

        a: "Super Eagles",
        b: "Super Eaglet",
        c: "Super falcons",
        d: "Golden Eagles",

    },
    { 
        question: "When was Nigeria formed?",

        a: 1912,
        b: 1913,
        c: 1914,
        d: 1915,
        correct: "c",

    },
    
    { 
        question: "Where was crude oil first discovered in Nigeria?",
        a: "Calabar",
        b: "Bayelsa State",
        c: "Delta State",
        d: "Biafra",
        correct: "b",

    },
    { 
        question: "Who was the first Nigerian to become a Noble Laureate?",
        a: "Wole Soyinka",
        b: "Abdulsalam Abubakar",
        c: "Olusegun Obasanjo",
        d: "Muhammadu Buhari",
        correct: "a",
    },
    { 
        question:  "When Nigeria did become a republic?",
        a: "1st October 1960",
        b: "1st October 1961",
        c: "1st October 1962",
        d: "1st October 1963",
        correct: "d"
    },

]

let introPage = document.getElementById("intro-inter");
let questionPage = document.getElementById("questions");
let startBtn = document.getElementById("start-btn");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let mainQuestion = document.getElementById("main-question");
let currentQuestionEl = document.getElementById("current-question");
let lastQuestionEl = document.getElementById("last-question");
let rightTimer = document.getElementById("right-timer");

let answerOne = document.getElementById("answer-one");
let answerTwo = document.getElementById("answer-two");
let answerThree = document.getElementById("answer-three");
let answerFour = document.getElementById("answer-four");

let currentQuestion = 0

rightTimer.innerHTML =  3 + ":" + 00;

const loadPage = () => {
    introPage.style.display = "flex";
    questionPage.style.display = "none";
}

const startQuiz = () => {
    questionPage.style.display = "block";
    introPage.style.display = "none";
    previousBtn.style.display = "none";
    
    mainQuestion.innerHTML = question[currentQuestion].question
    answerOne.innerHTML = question[currentQuestion].a
    answerTwo.innerHTML = question[currentQuestion].b
    answerThree.innerHTML = question[currentQuestion].c
    answerFour.innerHTML = question[currentQuestion].d
    
    currentQuestionEl.innerHTML = (currentQuestion + 1)
    lastQuestionEl.innerHTML = question.length
    

}

const nextQuestion =()=> {
    currentQuestion++
    startQuiz()
    previousBtn.style.display = "block"
}

const previousQuestion = () => {
    currentQuestion--
    startQuiz()
}

function startTimer() {
  let presentTime = rightTimer.innerHTML;
  
  let timeArray = presentTime.split(/[:]+/);

  let m = timeArray[0];
  let s = checkSecond((timeArray[1] - 1));
  
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  rightTimer.innerHTML =
    m + ":" + s;

  setTimeout(startTimer, 1000);

  
  if ( m == 0 && s == 00) {
    questionPage.style.display = "none"
    introPage.style.display = "flex"
    introPage.innerHTML = "<h1>Times Up</h1> <button onclick='location.reload()' style='width: 10vw; height: 10vh; text-align:center; background-color: #006668; color: white; margin-top: 10vh; border-radius: 10px;' >RELOAD</button>"
  } 

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }
}

loadPage()

startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", startTimer);
nextBtn.addEventListener("click", nextQuestion);
previousBtn.addEventListener("click", previousQuestion);