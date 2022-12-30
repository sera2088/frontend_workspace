//js_050_event.js
//비동기화 dom, ajax, XML

let btn = document.querySelector('button');

console.log('start');
btn.addEventListener(
  'click',
  function () {
    console.log('addEventListener');
  },
  false
);

console.log('end');
