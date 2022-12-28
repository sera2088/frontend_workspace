//js_043_checked.js

//체크박스에 체크하면 가격 더해지게 만들기

let totalCar = document.getElementById('total');

let chbCnt = document.querySelectorAll(`tbody input[type = "checkbox"]`);
console.log(chbCnt); //NodeList

//NodeList를 Array로 변환
let myChn = [...chbCnt];

//checkbox에 onclick 이벤트가 발생되었을때 수행될 carCount()를 등록
myChn.map((element) => {
  //window
  //console.log(this);
  element.onclick = carCount;
});

function carCount() {
  //this는 현재 이벤트가 발생된 checkbox 객체를 나타냄
  // console.log(this);
  //console.log(this.id);
  /*defualtValue는 <input>에 초기에 입력된 value의 값을 기억해 가져온다.*/
  let basicCar = Number(totalCar.defaultValue);

  myChn.map((v) => {
    if (v.checked) {
      basicCar += Number(v.value);
    }
  });

  totalCar.value = basicCar;
}
