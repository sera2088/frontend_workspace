//js_027_String.js

let data = "It`s alright";
console.log(data);

//length : 문자열의 길이
console.log(data.length);

/*
특정 범위 데이터를 리턴해주는 3가지 메소드
1. substring(start, end);
2. substr(start, length);
3. slice(start, end);
*/

data = "Apple, Banana, Kiwi";
//Banana
console.log(`substring: ${data.substring(7, 13)}`); //7인덱스 부터 13 인덱스 미만
//substring()은 음수값을 지원하지 않는다.
console.log(`substring: ${data.substring(-12, -6)}`);

//Bandna
console.log(`substr : ${data.substr(7, 6)}`);
//Bandna
console.log(`substr : ${data.substr(-12, 6)}`);

//Bandna
console.log(`slice : ${data.slice(7, 13)}`);
//Bandna
console.log(`slice : ${data.slice(-12, -6)}`);

console.log(`data : ${data}`);

//replace('찾을 문자열 | RegExp', '바꿀문자열');
// i: 대소문자 구분없음, g: 모든 문자열

console.log(`replace : ${data.replace("Banana", "Grape")}`);
//Apple, Banana, Kiwi
console.log(`data : ${data}`);

data = "Mr Blue has a blue house and a blue Car";
//Mr Blue has a red house and a blue Car
console.log(data.replace(/blue/, "red"));

data = "Mr Blue has a blue house and a blue Car";
//Mr Blue has a red house and a red Car
console.log(data.replace(/blue/g, "red"));

data = "Mr Blue has a blue house and a blue Car";
//Mr red has a blue house and a blue Car
console.log(data.replace(/blue/i, "red"));

data = "Mr Blue has a blue house and a blue Car";
//Mr red has a red house and a red Car
console.log(data.replace(/blue/gi, "red"));

data = "Hello World";
//HELLO WORLD
console.log(`toUpperCase() : ${data.toUpperCase()}`);
//hello world
console.log(`toLowerCase() : ${data.toLowerCase()}`);

let data2 = "javascript";
//Hello Worldjavascript
console.log(`concat(): ${data.concat(data2)}`);
//concat(): Hello World javascript
console.log(`concat(): ${data.concat(" ", data2)}`);
//Hello World_javascript
console.log(`concat(): ${data.concat("_", data2)}`);

//H
console.log(`charAt(): ${data.charAt(0)}`);
//72 (unicode value)
console.log(`charAt(): ${data.charCodeAt(0)}`);

//match() : 검색데이터와 일치하는 문자열이 있으면 문자열을 모두 찾아 배열로 리턴하고
//        일치하는 문자열이 없으면 null 로 리턴한다.
data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g);
//blue,blue object true
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

res = data.match(/red/g);
//null object false
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

//search() : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
//          일치하는 문자열이 없으면 -1을 리턴한다.
res = data.search(/blue/g);
//14
console.log(`search(): ${res}`);

res = data.search(/red/g);
//-1
console.log(`search(): ${res}`);

data = "Mr Blue has a blue house and a blue car";
//indexOf() : 문자열의 인덱스를 리턴
//0
console.log(data.indexOf("M"));

//3
console.log(data.indexOf("B"));
//14
console.log(data.indexOf("blue"));

let position = data.indexOf("blue");

//31
console.log(data.indexOf("blue", position + 1));

data = "Mr Blue has a blue house and a blue car";
let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf("blue", pos);
  if (pos != -1) console.log(pos);
  else break;
} while (true);

//repeat()
let text = "korea";
console.log(typeof text);
console.log(text.repeat(10));

text = "*";
console.log(text.repeat(10));

let text2 = "  korea   data ";
//15
console.log(text2.length);
//12
console.log(text2.trim().length);
