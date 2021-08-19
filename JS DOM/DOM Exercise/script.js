const tombol = document.querySelector('#tUbahWarna');
tombol.onclick = function() {
    document.body.classList.toggle('biru-muda');
}

const tAcakWarna = document.createElement('button');
const teksAcakWarna = document.createTextNode('Random Color');
tAcakWarna.appendChild(teksAcakWarna);
tAcakWarna.setAttribute('type', 'button');
tombol.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function () {
    //sMerah.value; --> to call the value of input element
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    
    document.body.style.backgroundColor = ('rgb('+ r +','+ g +','+ b +'');
});

sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    
    document.body.style.backgroundColor = ('rgb('+ r +','+ g +','+ b +'');
});

sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    
    document.body.style.backgroundColor = ('rgb('+ r +','+ g +','+ b +'');
});

// document.body.addEventListener('mousemove', function(event) {
//     const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//     const yPos = Math.round((event.clientY / window.innerHeight) * 255);
//     document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)';
// });
