//js_036_dom.js

let myNode = document.getElementById('p2');
//<p id="p2">content2</p>
console.log(myNode);
//myNode: [object HTMLParagraphElement]
console.log(`myNode: ${myNode}`);

/////////////////////////////////////////////

let ptNode = myNode.parentNode;

//div#wrap
console.log(ptNode);
//ptNode : [object HTMLDivElement]
console.log(`ptNode : ${ptNode}`);

ptNode.style.color = 'blue';

//////////////////////////////////////////////
//previousSibling : 모든 노드를 검색한다.

let prevNode = myNode.previousSibling;
//prevNode:[object Text]
console.log(`prevNode:${prevNode}`);

prevNode = prevNode.previousSibling;

console.log(prevNode);
//prevNode: [object HTMLParagraphElement]
console.log(`prevNode: ${prevNode}`);

///////////////////////////////////////////////////////
//previousElementSibling; : element node 만 검색한다.
let prevElementNode = myNode.previousElementSibling;
//<p id="p1">content1</p>
console.log(prevElementNode);
//[object HTMLParagraphElement]
console.log(`${prevElementNode}`);

/////////////////////////////////////////////////////////
//nextSibling
let nextNode = myNode.nextSibling;
//[object Text]
console.log(`${nextNode}`);

nextNode = nextNode.nextSibling;
//<p id="p3">content3</p>
console.log(nextNode);
//[object HTMLParagraphElement]
console.log(`${nextNode}`);

///////////////////////////////////////////
//nextElementSibling
let nextElementSibling = myNode.nextElementSibling;
//[object HTMLParagraphElement]
console.log(`${nextElementSibling}`);

///////////////////////////////////////////////////
//childNodes

let divNode = document.getElementById('wrap');
//[object HTMLDivElement]
console.log(`${divNode}`);

let divChilesNode = divNode.childNodes;
//[object NodeList]
console.log(`${divChilesNode}`);
//NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]
console.log(divChilesNode);
//////////////////////////////////////////
//children
let divChildren = divNode.children;
//[object HTMLCollection]
console.log(`${divChildren}`);
//HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]
console.log(divChildren);

let p4Node = document.querySelector('#p4');
//<p id="p4">
console.log(p4Node);
//[object HTMLParagraphElement]
console.log(`${p4Node}`);

/* 고수사진 가져오기 */
let aNode = p4Node.firstElementChild;
//<img src="images/gosu.jpg" alt="영화배우">
console.log(aNode);
//[object HTMLImageElement]
console.log(`${aNode}`);

/////////////////////////////////////////////////////////////////
// 객체.getAttribute('속성명'),   객체.setAttribute('속성명','값')
// 객체.속성명,     객체.속성명 = '값'

let aAttrNode = aNode.getAttribute(`src`);
//images/gosu.jpg
console.log(aAttrNode);

//http://127.0.0.1:5500/javascriptdemo/images/gosu.jpg
aAttrNode = aNode.src;
console.log(aAttrNode);

console.log(aNode.getAttribute('class'));
console.log(aNode.class);

// aNode.setAttribute('title', '스타배우');
// console.log(aNode.getAttribute('title'));
// console.log(aNode.title);
// aNode.id = 'imgGosu';
// console.log(aNode.getAttribute('id'));
// console.log(aNode.id);

console.log(aNode.getAttribute('title'));
console.log(aNode.title);
console.log(aNode.getAttribute('id'));
console.log(aNode.id);

let aAttrList = aNode.getAttributeNode;
console.log(aAttrList.length); //1
console.log(aAttrList); //ƒ getAttributeNode() { [native code] }
