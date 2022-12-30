//js_050_ajax.js

//Ajax : Asynchronous JavaScript And XML
/*
1. XMLHttpRequest 객체 생성한다.
2. 서버와 통신할 때 사용할 처리 방법을 등록한다.
3. 요청을 전송하고 통신을 시작한다.
*/

function process() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
  //xhttp.readystatechange = viewMessage;
  xhttp.send();

  //onload 메서드는 요청이 성공한다는 전제 하에 실행 되는 이벤트 핸들러
  //readystatechange 이벤트 대신 => onload 이벤트를 사용해도 됨
  xhttp.onload = () => {
    if (xhttp.status === 200) {
      let data = JSON.parse(xhttp.response);
      console.log(data);
    }
  };
}

console.log('start');
process();
console.log('end');
