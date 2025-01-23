const data = [
    // Basic Level - Math
    {
        Question: 'What is the sum of 3+5?',
        answers: ['5', '8', '10', '12'],
        ans: 2,
        level: 'Basic',
        type: 'Math'
    },
    {
        Question: 'What is 10-7?',
        answers: ['2', '5', '3', '6'],
        ans: 3,
        level: 'Basic',
        type: 'Math'
    },
    {
        Question: 'What is 7x2?',
        answers: ['12', '14', '16', '18'],
        ans: 2,
        level: 'Basic',
        type: 'Math'
    },

    // Intermediate Level - Math
    {
        Question: 'What is 15 divided by 3?',
        answers: ['3', '4', '5', '6'],
        ans: 3,
        level: 'Intermediate',
        type: 'Math'
    },
    {
        Question: 'What is the square root of 49?',
        answers: ['5', '7', '9', '11'],
        ans: 2,
        level: 'Intermediate',
        type: 'Math'
    },
    {
        Question: 'What is 12x3?',
        answers: ['36', '32', '40', '48'],
        ans: 1,
        level: 'Intermediate',
        type: 'Math'
    },

    // Advanced Level - Math
    {
        Question: 'What is the derivative of x²?',
        answers: ['x', '2x', 'x^2', '2'],
        ans: 2,
        level: 'Advanced',
        type: 'Math'
    },
    {
        Question: 'Solve: 5x + 2 = 17. What is x?',
        answers: ['3', '4', '5', '6'],
        ans: 2,
        level: 'Advanced',
        type: 'Math'
    },
    {
        Question: 'What is the integral of 2x?',
        answers: ['x^2 + C', 'x^3 + C', '2x^2 + C', 'None of these'],
        ans: 1,
        level: 'Advanced',
        type: 'Math'
    },

    // Basic Level - Coding
    {
        Question: 'What does HTML stand for?',
        answers: [
            'HyperText Markup Language',
            'HyperTransfer Markup Language',
            'HyperText Main Language',
            'None of these'
        ],
        ans: 1,
        level: 'Basic',
        type: 'Coding'
    },
    {
        Question: 'Which programming language is known as "the language of the web"?',
        answers: ['Python', 'JavaScript', 'C++', 'Java'],
        ans: 2,
        level: 'Basic',
        type: 'Coding'
    },
    {
        Question: 'Which symbol is used for comments in JavaScript?',
        answers: ['#', '//', '<!-- -->', '/* */'],
        ans: 2,
        level: 'Basic',
        type: 'Coding'
    },

    // Intermediate Level - Coding
    {
        Question: 'What is the output of `console.log(typeof null)`?',
        answers: ['null', 'undefined', 'object', 'string'],
        ans: 3,
        level: 'Intermediate',
        type: 'Coding'
    },
    {
        Question: 'Which method is used to add an element at the end of an array in JavaScript?',
        answers: ['push()', 'pop()', 'unshift()', 'concat()'],
        ans: 1,
        level: 'Intermediate',
        type: 'Coding'
    },
    {
        Question: 'Which CSS property controls the text size?',
        answers: ['font-style', 'text-size', 'font-size', 'text-style'],
        ans: 3,
        level: 'Intermediate',
        type: 'Coding'
    },

    // Advanced Level - Coding
    {
        Question: 'What is the time complexity of binary search?',
        answers: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        ans: 2,
        level: 'Advanced',
        type: 'Coding'
    },
    {
        Question: 'Which of the following is a closure in JavaScript?',
        answers: [
            'A self-invoking function',
            'A function having access to its outer scope',
            'A function bound to a specific object',
            'None of these'
        ],
        ans: 2,
        level: 'Advanced',
        type: 'Coding'
    },
    {
        Question: 'Which of these is a non-relational database?',
        answers: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
        ans: 2,
        level: 'Advanced',
        type: 'Coding'
    },

    // General - Basic
    {
        Question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        ans: 2,
        level: 'Basic',
        type: 'General'
    },
    {
        Question: 'Which gas do plants primarily consume during photosynthesis?',
        answers: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        ans: 3,
        level: 'Basic',
        type: 'General'
    },

    // General - Intermediate
    {
        Question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin', 'Rome'],
        ans: 1,
        level: 'Intermediate',
        type: 'General'
    },
    {
        Question: 'Who discovered gravity?',
        answers: ['Albert Einstein', 'Galileo Galilei', 'Isaac Newton', 'Nikola Tesla'],
        ans: 3,
        level: 'Intermediate',
        type: 'General'
    },

    // General - Advanced
    {
        Question: 'Who wrote "War and Peace"?',
        answers: ['Leo Tolstoy', 'Charles Dickens', 'Mark Twain', 'Victor Hugo'],
        ans: 1,
        level: 'Advanced',
        type: 'General'
    },
    {
        Question: 'What is the largest organ in the human body?',
        answers: ['Liver', 'Skin', 'Heart', 'Brain'],
        ans: 2,
        level: 'Advanced',
        type: 'General'
    }
];


let StartBtn = document.querySelector('.start-button');
let selectionLevel = document.querySelector('#level-select');
let choiceQuestions = document.querySelector('#type-select');
console.log(selectionLevel.value,choiceQuestions);

let LevelValue;
let ChoiceValue;

let QuestionType = (e) => {
    ChoiceValue = e.target.value;

}
let DifficultSelect = (e) => {
    LevelValue = e.target.value;

}

let filterData = () => {
    let copyData = [...data]
    console.log(copyData);
    console.log(ChoiceValue,LevelValue);
    
    if (ChoiceValue !== undefined && LevelValue !== undefined) {
        copyData = copyData.filter((item) => item.level === LevelValue && item.type === ChoiceValue)
    } else if (ChoiceValue !== undefined) {
        copyData = copyData.filter((item) => item.level === selectionLevel.value && item.type === ChoiceValue)
    } else if (LevelValue !== undefined) {
        copyData = copyData.filter((item) => item.level === LevelValue && item.type === choiceQuestions.value)
    }
    else {
        copyData = copyData.filter((item) => item.level === selectionLevel.value && item.type === choiceQuestions.value)
    }
    console.log(copyData);
    localStorage.setItem('data', JSON.stringify(copyData))
}

let StartQuiz = () => {
    window.location.href = './quiz.html'
    filterData()
}

choiceQuestions.addEventListener('change', (e) => {
    QuestionType(e)
})
selectionLevel.addEventListener('change', (e) => {
    DifficultSelect(e)
})
StartBtn.addEventListener('click', StartQuiz)
