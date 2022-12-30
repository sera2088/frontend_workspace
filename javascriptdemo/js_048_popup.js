//js_048_popup.js

let pop = document.querySelector('area');
pop.onclick = () => {
  let pt = document.querySelector('#pt');
  pt.style.width = '0px';
  pt.style.height = '0px';
  pt.style.overflow = 'hidden';
};
