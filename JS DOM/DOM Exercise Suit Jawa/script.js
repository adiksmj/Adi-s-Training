var tanya = true
while (tanya) {
    let p = prompt('pilih salah satu :\norang, gajah, semut');

function pilihanComputer() {
    const kom = Math.random()
    if (kom < 0.34) return 'gajah';
    if (kom >= 0.34 && kom < 0.67) return 'orang';
    return 'semut';
}
    let hasil = '';
    if ( p == pilihanComputer()) {
        hasil = 'SERI !';
    } else if ( p == 'gajah') {
        hasil = (pilihanComputer() == 'orang') ? 'MENANG !' : 'KALAH !'; 
    } else if (pilihanComputer() == 'semut') {
        hasil = (pilihanComputer() == 'gajah') ? 'MENANG !' : 'KALAH !'; 
    } else if ( p == 'orang') {
        hasil = (pilihanComputer() == 'semut') ? 'MENANG !' : 'KALAH !'; 
    } else {
        hasil = 'memasukkan pilihan yang salah'
    }

    alert('Kamu memilih : '+ p +', dan Computer memilih : '+ pilihanComputer() +'\nMaka kamu '+ hasil +'')

    tanya = confirm('Lagi ?')
}

alert('Terimakasih sudah bermain :)')