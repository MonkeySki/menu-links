
let questions = [
    {
        name: "Plane?",
        number: 6,
        answer: 6,
        correct: false,
    },
    {
        name: "Castle?",
        number: 5,
        answer: 5,
        correct: false,
    },
    {
        name: "Deep Sea Creatures?",
        number: 4,
        answer: 4,
        correct: false,
    },
    {
        name: "African Elephant?",
        number: 3,
        answer: 3,
        correct: false,
    },
    {
        name: "Some Ants?",
        number: 2,
        answer: 2,
        correct: false,
    },
    {
        name: "Green Maori Thing?",
        number: 1,
        answer: 1,
        correct: false,
    }
  
    ];

    export function getQuestion(number) {
        return questions.find(
          (question) => question.number === number,
        );
      }
    export function displayQuestion(number){
        let myQuestion = getQuestion(number);
    return  (myQuestion.name);
    }