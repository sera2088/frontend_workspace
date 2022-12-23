//ja_025_Number.js

let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data=${typeof data}`);
console.log(`fData=${typeof fData}`);
console.log(`nObj=${typeof nObj}`);

//toString() : numver, Numver -> string
console.log(typeof nObj.toString()); //string
console.log(typeof data.toString()); //string

//Number -> numver
//valueOf() : object
console.log(data + fData); //numver + number = 20
console.log(data + nObj); //number + object = 20

//Number -> numver
//valueOf() : object->primitive
console.log(typeof nObj.valueOf()); //number
console.log(typeof new String("javascript").valueOf()); //string

// let val = "10.0";
// let val = "10.3";
//let val = 'A';
let val = "10A";
//let val = 'A10';
console.log(val + val);
console.log(val);

//숫자로 바꾸기

//Number(), parseInt()
console.log(Number(val) + Number(val)); //20 20.6 NaN NaN NaN

//숫자가 제일 앞에 있으면 숫자만 변형시켜줌
console.log(parseInt(val) + parseInt(val)); //20 20 NaN 20 NaN
console.log(parseFloat(val) + parseFloat(val)); //20 20.6 NaN 20 NaN
