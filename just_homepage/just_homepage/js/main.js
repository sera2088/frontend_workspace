//main.js

////////////////////////////////////////////////
//슬라이드 기능 구현
///////////////////////////////////////////////

setInterval(function () {
  let tg = document.querySelector('.slide');
  tg.style.top = '-100%';
  tg.style.transition = '0.6s';

  setTimeout(function () {
    let first = tg.querySelectorAll('li')[0];
    tg.appendChild(first);
    tg.style.top = '0';
    tg.style.transition = 'none';
  }, 600);
}, 3000);

////////////////////////////////////////////////
//탭변경 변경하기
///////////////////////////////////////////////
function chgTab(i1, i2) {
  //탭메뉴
  let tm = document.querySelectorAll('.tm>li');

  //탭내용
  let tc = document.querySelectorAll('.tc>li');

  //클래스 추가
  tm[i1].classList.add('on');
  tc[i1].classList.add('on');

  //클래스 제거
  tm[i2].classList.remove('on');
  tc[i2].classList.remove('on');

  /* //////////////////////////////////////////////////////
   * 함수명 : popup
   *
   */ ///////////////////////////////////////////////////////

  function popup(sts) {
    var pop = doc.querySelector('.pop');
    pop.style.display = sts;
  }
}
