//js_045_eventListener.js

let btn = document.querySelector('button');

//마지막 ('click2')만 실행됨
// btn.onclick = () => {
//   alert('click1');
// };

// btn.onclick = () => {
//   alert('click2');
// };

function click1() {
  alert('click1');
}

function click2() {
  alert('click2');
}

// btn.addEventListener('이벤트', 함수, 이벤트 전파);
// 이벤트 전파 => ture : capturing, false : bubbling
// 이벤트 전파 지정 안하면 기본적으로 버블링
// console.log(addEventListener ? true : false);
btn.addEventListener('click', click1, false);
btn.addEventListener('click', click2, false);

// 이벤트 제거
// btn.removeEventListener('click', click2);
