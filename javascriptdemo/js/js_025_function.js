/*
<프로그램 실행결과>
주어진 배열에서 3의 배수 개수 => 6
주어진 배열에서 3의 배수 합 => 108
*/

let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];

//주어진 배열에서 어떤 수의 배수를 구해서 리턴해주는 함수 정의

function process(arr) {
  for (let element of arr) {
    let data = [];
    if (element % 3 == 0) {
      data.push(element); //배열에 요소 추가
    }
  }
  return data;
}

console.log(process(arr));
console.log(`주어진 배열에서 3의 배수 개수 => ${process(arr).length}`);

let sum = 0;
let result = function (val) {
  for (let element of val) {
    sum += element;
  }
  return sum;
};

console.log(`주어진 배열에서 3의 배수 합 => ${result(process(arr))}`);
