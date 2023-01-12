// let gnbShow = document.querySelector('.gnb_show');

// function showGnb() {
//   gnbShow.style.display = 'block';
// }

// function exitGnb() {
//   gnbShow.style.display = 'none';
// }

let gnb1 = document.querySelector('.gnb1 a');
let gnb2 = document.querySelector('.gnb2 a');
let gnb3 = document.querySelector('.gnb3 a');
let gnb4 = document.querySelector('.gnb4 a');
let gnb5 = document.querySelector('.gnb5 a');

function showGnb(s) {
  s.style.color = 'black';
}

function exitGnb(s) {
  s.style.color = 'red';
}

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

let modalWrap = document.querySelector('.modal_wrap');
let modalBg = document.querySelector('.modal_bg');

function showPopup() {
  modalBg.style.display = 'block';
  modalWrap.style.display = 'block';
}

function modalClose() {
  modalWrap.style.display = 'none';
  modalBg.style.display = 'none';
}

setInterval(function () {
  let tg = document.querySelector('.slide');
  tg.style.top = '-100%';
  tg.style.transition = '0.6s'; //animation효과 0.6초

  setTimeout(function () {
    let first = tg.querySelectorAll('li')[0]; //tg li에 있는 첫번째를 가져와라
    tg.appendChild(first); //첫번째 것을 가져와서 tg의 맨 뒤에 붙여준다.(=자식으로 붙여준다.)
    tg.style.top = '0';
    tg.style.transition = 'none';
  }, 600); //0.6초 동안 setTimeout() 수행
}, 2000); //3초 동안 setInterval() 수행
