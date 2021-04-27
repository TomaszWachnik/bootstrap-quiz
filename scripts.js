const correctAnwers = ['c', 'a', 'a', 'c', 'b'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const quiz = document.querySelector('.quiz');


form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //check answer
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnwers[index]) {
            score += 20;
        }
    });

    //show result on page
    scrollTo(0, 0);
    result.classList.remove('d-none');
    quiz.classList.add('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 80);

});