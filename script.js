
const data = JSON.parse(localStorage.getItem('data'))
let h1 = document.querySelector('.question')
let div = document.querySelector('.answers')
let Nextbutton = document.querySelector('.Nextbutton')
let totalQuizRemain = document.querySelector('.totalQuizRemain')
let RestartBtn = document.querySelector('.ReStart')
let timer = document.querySelector('.timer')
let progress_overlay = document.querySelector('.progress-overlay')
let currentScore = document.querySelector('.currentScore')
let currentData = {};
let Interval;
let s = []
let score = JSON.parse(localStorage.getItem('score')) || 0;
let index = JSON.parse(localStorage.getItem('index')) || 0;
let second = JSON.parse(localStorage.getItem('second')) || 10;

let updateIndex = () => {
    currentData = data[index]
}

document.addEventListener('DOMContentLoaded', () => {
    updateIndex()
    timeCounter()
    DisplayContent()
    remainingQuiz()
})

let DisplayContent = () => {
    h1.innerHTML = ''
    div.innerHTML = ''
    currentScore.innerHTML = `${score}/${data.length}`
    if (index < data.length || data.length == 0) {
        if (data.length > 0) {
            h1.innerHTML =`${index+1}. ${currentData.Question}`;
            currentData.answers.forEach((answer, index) => {
                div.innerHTML += `<h3 class='answer' data-id='${index + 1}'>${answer}</h3>`
            })
        } else {
            h1.innerHTML = `You Have no Mcqs For Quiz`;
            RestartBtn.innerHTML = 'Back'
            RestartBtn.classList.remove('ReStart')
        }
    } else {
        h1.innerHTML = `You Complete the Quiz Qame.`;
        div.innerHTML = `<h4>Your Score is ${score}</h4>`
        RestartBtn.classList.remove('ReStart')
        Nextbutton.classList.add('Nextbutton')
   }
    SelectAnswer()

}

let SelectAnswer = () => {
    let answer = document.querySelectorAll('.answer')
    let check = false
    answer.forEach((button) => {
        Nextbutton.disabled = true;
        button.addEventListener('click', ({ target }) => {
            if (check == false) {
                if (target.dataset.id == currentData.ans) {
                    target.classList.add('right')
                    score++;
                    localStorage.setItem('score',JSON.stringify(score))
                    let percetange = Math.floor(100 / data.length);
                    progress_overlay.style.width = `${score * percetange}%`;
                    currentScore.innerHTML = `${score}/${data.length}`;
                    check = true
                    clearInterval(Interval)
                    Nextbutton.disabled = false;
                }
                else {
                    answer[(currentData.ans - 1)].classList.add('right')
                    target.classList.add('wrong')
                    check = true
                    Nextbutton.disabled = false;
                    clearInterval(Interval)
                }
            }
            second = 10
            localStorage.setItem('second', JSON.stringify(second))
            button.style.cursor = 'not-allowed';
            Nextbutton.classList.remove('Nextbutton')

        })
    })
}

Nextbutton.addEventListener('click', () => {
    Interval = setInterval(SecondDown, 1000)
    index++;
    localStorage.setItem('index', JSON.stringify(index))
    if (index < data.length) {
        timeCounter()
    } else {
        timer.innerHTML = ''
    }
    updateIndex()
    DisplayContent()
    remainingQuiz()
})

let remainingQuiz = () => {
    if (index < data.length) {
        totalQuizRemain.innerHTML = `${index + 1}/${data.length}`
    }
}

RestartBtn.addEventListener('click', () => {
    index = 0;
    localStorage.setItem('index', JSON.stringify(index))
    score = 0;
    RestartBtn.classList.add('ReStart')
    updateIndex()
    DisplayContent()
    remainingQuiz()
    window.location.href = './index.html'
})

function SecondDown() {
    if (index < data.length) {
        if (second == 0) {
            index++
            second = 10
        }
        else {
            second--;
        }
        localStorage.setItem('second', JSON.parse(second))
        timeCounter()
        updateIndex()
        remainingQuiz()
        DisplayContent()
    }

}


Interval = setInterval(SecondDown, 1000)
let timeCounter = () => {
    if (index < data.length) {
        timer.innerHTML = second
    }
    else {
        timer.innerHTML = ''

    }
}
