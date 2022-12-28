//js_046_gallery.js

//(1) 작은 이미지를 클릭하면 큰 이미지 보이게

let bigImg = document.querySelector('#photo > img');
// console.log(bigImg.src);
let list_zone = document.querySelector('ul#inner_list');
let ul_li = list_zone.children;
console.log(ul_li); //HTMLCollection(8)

// ul_li = [...ul_li]; //배열에 넣기

[...ul_li].map((liTag, idx) => {
  let aTag = liTag.querySelector('a');
  aTag.onclick = (e) => {
    bigImg.src = aTag.href;
    return false; //e.preventDefault()
  };
});

//(2) 다음( > ) 버튼을 클릭할때 마다 <li>이 100만큼 이동하게 한다.
let m_num = 0;
let next_btn = document.querySelector('#next_btn');
next_btn.onclick = (e) => {
  if (m_num >= ul_li.length - 3) return false;
  m_num++;
  list_zone.style.marginLeft = -100 * m_num + 'px';
  return false; //e.prenventDefault()
};

//(3) 이전( < ) 버튼을 클릭할때 마다 <li>이 -100만큼 이동하게 한다.
let befor_btn = document.querySelector('#before_btn');
befor_btn.onclick = (e) => {
  if (m_num <= 0) return false;
  m_num--;
  list_zone.style.marginLeft = -100 * m_num + 'px';
  return false; //e.prenventDefault()
};
