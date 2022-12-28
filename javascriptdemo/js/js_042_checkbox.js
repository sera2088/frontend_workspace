//js_042_checkbox.js

//약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert('약관에 동의해야 합니다.');
    return false;
  }
};

// 전체 선택
document.frm.allCheck.onclick = function () {
  // console.log(this.checked);

  // document.frm.subject1.checked = this.checked;
  // document.frm.subject2.checked = this.checked;
  // document.frm.subject3.checked = this.checked;

  //NodeList
  let checkgroup = document.querySelectorAll('.checkgroup');
  // console.log(checkgroup.length);

  // for (let element of checkgroup) {
  //  console.log(this, typeof this, `${this}`)
  //  element.checked = this.checked;
  // }

  /////////////////////////////////////////////////////
  //ES6 Spread operator : NodeList를 Array로 변경
  let myThis = this;
  //let iArray = [...checkgroup];
  //iArray.map(function (element) {
  //alert(this); 여기에서 this 는 window
  //element.checked = myThis.checked;
  //});

  //////////////////////////////////////////////////////////
  //Array.from() : NodeList를 Array로 변경
  // let myArray = Array.from(checkgroup);
  // console.log(`${myArray}`);

  // myArray.map(function (element) {
  //   element.checked = myThis.checked;
  // });

  ///////////////////////////////////////////////////////////
  //forEach()

  checkgroup.forEach(function (element) {
    // console.log(element);
    // console.log(this);
    element.checked = myThis.checked;
  });
};
