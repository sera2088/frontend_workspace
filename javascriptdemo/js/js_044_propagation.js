//js_044_propagation.js

//
document.querySelector('.red').onclick = (e) => {
  alert('red');
  e.stopPropagation(); //부모 자식간 이벤트 전파 차단 메소드
};

document.querySelector('.green').onclick = (e) => {
  alert('green');
  e.stopPropagation();
};

document.querySelector('.blue').onclick = (e) => {
  alert('blue');
  e.stopPropagation();
};

document.querySelector('a').onclick = (e) => {
  alert('안녕하세요');
  // e.preventDefault();
  return false;
};

/*
 * [1] Event Progapation(이벤트 전파)
 * ① 캡처링 (capturing phase) : 부모요소에서 Target 요소로 이벤트 전파
 * ② 버블링 (bubbling phase) : Target요소에서 부모 요소로 이벤트 전파
 *
 * [2] 이벤트 차단
 * stopPropagation();
 *
 * [3] stoPropagation()와 preventDefault() 비교
 *  stopPropagation() : 이벤트 전파 차단 return false(jQuery)
 *  preventDefault() : 디폴트 이벤트 차단 return false(javascript, jQuery)
 * https://www.w3schools.com/jsref/event_preventdefault.asp
 * https://developer.mozilla.org/ko/docs/Web/API/Event/stopPropagation
 */
