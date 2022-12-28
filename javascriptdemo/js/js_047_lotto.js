//js_047_lotto.js

//1. 6개의 난수를 구하고 중복 체크
let lotto = [];

for (let i = 0; i < 6; i++) {
  lotto[i] = Math.floor(Math.random() * 45) + 1;
  for (let j = 0; j < i; j++) {
    if (i != 0 && lotto[i] === lotto[j]) {
      // lotto.push(num);
      i--;
      break;
    }
  }
}
console.log(lotto);

//2. 정렬

lotto = lotto.sort((a, b) => a - b);

//3. 출력
let wrap = document.querySelectorAll('.wrap div');

// for (let i = 0; i < 6; i++) {
//   [...wrap][i].innerHTML = lotto[i];
// }

// console.log(wrap);

//NodeList
wrap.forEach((element, idx) => {
  element.innerText = lotto[idx];
});
