const submit = document.querySelector('.submit');
const score = document.querySelector('.score');
const grade = document.querySelector('.grade');


submit.addEventListener('click', ()=>{
   const name = score.value;
    grade.innerHTML = `your score is ${name}`
})

