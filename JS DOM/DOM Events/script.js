// // Event Handler : 
// Inline Html attribute
// Element Method 

// addEventListener()

//on<event> 

//____________________________________________________________

// 1. Inline Html Attribute (onclick)
// add background color to lightblue (paragraph 3)
    const p3 = document.querySelector('.p3');
    function ubahWarna1() {
        p3.style.backgroundColor = 'lightblue';
    }

// Element Method
// add background color to lightblue (paragraph 2)
    const p2 = document.querySelector('.p2');
    function ubahWarna() {
        p2.style.backgroundColor = 'lightblue';
    }
    p2.onclick = ubahWarna;


// addEventListener()
// adding list 'item baru' insde the paragraf 4

    const p4 = document.querySelector('section#b p');
    p4.addEventListener('click', function () {
        const ul = document.querySelector('section#b ul');
        const liBaru = document.createElement('li');
        const teksBaru = document.createTextNode('item baru');
        liBaru.appendChild(teksBaru);
        ul.appendChild(liBaru);
    });