
const close = document.querySelectorAll('.close');
// 1st Method
// for ( let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function() {
//         close[i].parentElement.style.display = 'none';
//     });
// }

// 2nd Method
// for ( let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none'; //traversal
//     });
// }

// 3rd Method
// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); //Prevent Default
//         e.stopPropagation(); //Stop Event Bubbling
//     }); 
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     });
// });

//Another way :
const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});


// DOM Traversal Method
// #parentNode     ----> return Node
// #parentElement  ----> return Element
// #nextSibling    ----> return Node
// #nextElementSibling ----> return Element
// #previousSibling    ----> return Node
// #previousElementSibling ----> return Element