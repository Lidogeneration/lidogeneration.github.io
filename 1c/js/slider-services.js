const slides = document.getElementsByName('name-slide');
const slides2 = document.getElementsByName('name-slide2');
const slides3 = document.getElementsByName('name-slide3');
const slides4 = document.getElementsByName('name-slide4');
const slides5 = document.getElementsByName('name-slide5');
const slides6 = document.getElementsByName('name-slide6');
const slides7 = document.getElementsByName('name-slide7');

startDisplayNoneForSlides(slides);
startDisplayNoneForSlides(slides2);
startDisplayNoneForSlides(slides3);
startDisplayNoneForSlides(slides4);
startDisplayNoneForSlides(slides5);
startDisplayNoneForSlides(slides6);
startDisplayNoneForSlides(slides7);

function startDisplayNoneForSlides(arr) {
  arr[0].style.display = "block";
  for(let i = 1; i < arr.length; i++) {
    arr[i].style.display = "none";
  }
};

let countIdForButton = 0;

const buttonLeft = document.getElementsByName('button-left-name');
const buttonRight = document.getElementsByName('button-right-name');

countIdForButton = 0;
buttonLeft.forEach(x => {
  x.onclick = onClickLeftButton;
  x.id = "button-left-" + (countIdForButton++).toString();
});

countIdForButton = 0;
buttonRight.forEach(x => {
  x.onclick = onClickRightButton
  x.id = "button-right-" + (countIdForButton++).toString();
});

function onClickLeftButton(event) {
  switch (event.target.id) {
    case 'button-left-0':
    slideLeft(slides);
    break;
    case 'button-left-1':
    slideLeft(slides2);
    break;
    case 'button-left-2':
    slideLeft(slides3);
    break;
    case 'button-left-3':
    slideLeft(slides4);
    break;
    case 'button-left-4':
    slideLeft(slides5);
    break;
    case 'button-left-5':
    slideLeft(slides6);
    break;
    case 'button-left-6':
    slideLeft(slides7);
    break;
  }
};

function onClickRightButton(event) {
  switch (event.target.id) {
    case 'button-right-0':
    slideRight(slides);
    break;
    case 'button-right-1':
    slideRight(slides2);
    break;
    case 'button-right-2':
    slideRight(slides3);
    break;
    case 'button-right-3':
    slideRight(slides4);
    break;
    case 'button-right-4':
    slideRight(slides5);
    break;
    case 'button-right-5':
    slideRight(slides6);
    break;
    case 'button-right-6':
    slideRight(slides7);
    break;
  }
};

function animationSlide(arr, index) {
  const fps = 80; 
  let counterScale = 0.7;
    let timer = setInterval(function() {
      if(counterScale >= 1) clearInterval(timer);
      else {
        counterScale+=0.01;
        arr[index].style.transform = "scale(" + counterScale + "," + counterScale +")";
      }
    }, 1000 / fps);
};

//timerGoSlide(false);

// function timerGoSlide(checkClick) {
//     let timer = setInterval(function() {
//       if(checkClick) clearInterval(timer);
//       slideRight();
//     }, 5000);
// };


function slideLeft(arr) {
  if(arr[0].style.display !== "block") {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].style.display === "block") {
        arr[i].style.display = "none";
        arr[--i].style.display = "block";
        animationSlide(arr, i);
        break;
      }
    }
  } else {
    arr[0].style.display = "none";
    arr[arr.length - 1].style.display = "block";
    animationSlide(arr, arr.length - 1);
  }
};

function slideRight(arr) {
  if(arr[arr.length - 1].style.display !== "block") {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].style.display === "block") {
        arr[i].style.display = "none";
        arr[++i].style.display = "block";
        animationSlide(arr,i);
        break;
      }
    }
  } else {
    arr[arr.length - 1].style.display = "none";
    arr[0].style.display = "block";
    animationSlide(arr,0);
  }
};