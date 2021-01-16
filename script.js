const quizData = [
    {
        question: 'Comida favorita de Fabián',
        a: 'Lasaña',
        b: 'Tokio roll sushi tempurizado con tupping',
        c: 'Sopa de leche',
        d: 'Phad Thai'
        correct: 'c'
    },
    {
        question: 'Idioma preferido'
        a: 'Ingles',
        b: 'Español',
        c: 'Javascript',
        d: 'Frances',
        e: 'Andaluh',
        correct: 'd'
    },
    {
        question: 'Area de la programaciòn en la que destaca'
        a: 'FrontEnd',
        b: 'BackEnd',
        c: 'Base de Datos',
        d: 'Mobile Develop',
        correct: 'a'
    },
    {
        
    }

]

const questionEl =document.getElementById('question')
const a_text = document.getElementById(a_text)
const b_text = document.getElementById(b_text)
const c_text = document.getElementById(c_text)
const d_text = document.getElementById(d_text)

let currentQuiz = 0;

loadQuiz();

function loadQuiz () {
    const currentQuizData = quizData¨[currentQuestion];
    questionEl.innerHTML = quizData
    [currentQuestion]

    currentQuestion++;
}