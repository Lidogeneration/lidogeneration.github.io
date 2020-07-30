const qvCont = document.querySelectorAll('.qv__form-cont');
const stepsTitle = document.getElementById('stepsTitle');
const stepsCont = document.getElementById('stepsCont');
const qvCountTxt = document.getElementById('qvCount');
let qvCount = 1;

function qvClick() {
  for(let i = 0; i < qvCont.length; i++){
    qvCont[i].classList.add('qv__form-hide');
  }
  qvCont[qvCount].classList.remove('qv__form-hide');
  qvCount++;
  qvCountTxt.textContent = String(qvCount);
  if(qvCount === 6) {
    stepsCont.classList.add('d-none');
    stepsTitle.innerHTML = 'Вы ответили на все вопросы';
  }
}


