//js_047_this.js

//호출한 객체가 없을 경우에는 기본적으로 Window객체이다.
console.log(this);

let member = {
  name: '홍길동',
  show: function () {
    console.log(this);
  },
};

//{name: '홍길동', show: ƒ}
member.show();
//////////////////////////////////////////////
let member2 = {
  name: '홍길동',
  show: () => {
    console.log(this);
  },
};

//Window
member2.show();

function showThisName() {
  console.log(this);
}

//Window
showThisName();

let showThisName2 = () => {
  console.log(this);
};

//Window
showThisName2();

/////////////////////////////////////////////
//이벤트에서 this
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  //<button id="btn">commit</button> true
  console.log(this, this == btn);
});

btn.addEventListener('click', () => {
  //Window false
  console.log(this, this == btn);
});

/////////////////////////////////////////////////////////////
//call, apply, bind를 이용해서 this에 특정 객체를 지정할 수 있음
/////////////////////////////////////////////////////////////

const hong = { name: '홍길동' };
const jung = { name: '정해인' };

////////////////////////////////////////////////////////////////////////////
//call( ) : call 메서드는 모든 함수에서 사용할 수 있으며 this값을 특정값으로 지정할 수 있다.

console.log('call()=======================================');
//{name: '홍길동'}
showThisName.call(hong); //hong 넣어주면 this는 객체값을 나타냄
//{name: '정해인'}
showThisName.call(jung);

//Arrow Function 일 때 : Window
showThisName2.call(hong);
//Arrow Function 일 때 : Window
showThisName2.call(jung);

function person(birthday, job) {
  this.birthday = birthday;
  this.job = job;
  console.log(this);
}

//Window
person(2019, 'IT');

//this로 사용 할 hong 객체와 person 함수의 매개변수에서 받을 인수를 넘긴다.
//{name: '홍길동', birthday: 2000, job: '프로그래머'}
person.call(hong, 2000, '프로그래머');

//this로 사용 할 jung 객체와 person 함수의 매개변수에서 받을 인수를 넘긴다.
//{name: '정해인', birthday: 2016, job: '디자이너'}
person.call(jung, 2016, '디자이너');

////////////////////////////////////////////////
//apply
// 1. apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다.
// 2. call은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만 apply는 매개변수를 배열로 받는다.

console.log('apply()==================================================');
//{name: '홍길동', birthday: 2000, job: '프로그래머'}
person.apply(hong, [2000, '프로그래머']);
//{name: '정해인', birthday: 2016, job: '디자이너'}
person.apply(jung, [2016, '디자이너']);

////////////////////////////////////////////////////////////////////
//bind
// 1. call과 사용 방법은 같으나 실행을 해야한다.

//{name: '홍길동', birthday: 2000, job: '프로그래머'}
let hongPerson = person.bind(hong, 2000, '프로그래머');
hongPerson();

//{name: '정해인', birthday: 2016, job: '디자이너'}
let jungPerson = person.bind(jung, 2016, '디자이너');
jungPerson();
