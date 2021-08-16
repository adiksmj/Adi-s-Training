// DOM Manipulation part 2
// create the tag first and then the element
//method of Node Manipulation :
//-document.createElement()
//-document.createTextNode()
//-Node.appendChild()
//-Node.insertBefore()
//-parentNode.removeChild()
//-parentNode.replaceChild()
//________________________________________________________________
//document.createElement()
const pBaru = document.createElement('p'); //creating the tag
const teksPbaru = document.createTextNode('Paragraf Baru'); //creating the element
pBaru.appendChild(teksPbaru); // adding the element inside the tag

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); //locating the place of new element (adding to the last part of the section)
//________________________________________________________________
//adding 'item baru' between item 1 and item 2
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul'); //calling the parent of the new place
const li2 = ul.querySelector('li:nth-child(2)') //decide to insert before what node
ul.insertBefore(liBaru, li2); //insert the node to the place we want
//________________________________________________________________

//remove the instagram link

sectionA.removeChild(document.getElementsByTagName('a')[0]);

//________________________________________________________________

//replace paragraf 4 to h2 'Judul Baru'

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksh2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2Baru.style.backgroundColor = 'lightgreen'