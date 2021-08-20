
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
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    }); 
});


// DOM Traversal Method
// #parentNode     ----> return Node
// #parentElement  ----> return Element
// #nextSibling    ----> return Node
// #nextElementSibling ----> return Element
// #previousSibling    ----> return Node
// #previousElementSibling ----> return Element