const calcCont = document.getElementsByClassName('calcCont');
const progressBg = document.getElementById('progressBg');
const progressCount = document.getElementById('progressCount');
const saleCount = document.getElementById('saleCount');
let qvCount = 1;


function quiz(){
  progressBg.style.width = ('20' * qvCount) + '%';
  for(i = 0; i < calcCont.length; i++){
    calcCont[i].classList.add('hideCalc');
  }
  calcCont[qvCount].classList.remove('hideCalc');
  saleCount.textContent = String(qvCount*5);
  qvCount++;
  progressCount.textContent = String(qvCount);
  $('.phoneidcl').inputmask('+38(999) 999-99-99', {
    "oncomplete": function () {
      progressBg.style.width = '100' + '%';
      saleCount.textContent = '25';
      progressCount.textContent = '5';
      $(".disbutt").prop("disabled", false);
    },
    "onincomplete": function () {
        $(".disbutt").prop("disabled", true);
    }
});
};