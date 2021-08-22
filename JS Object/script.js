//1. Object Literal
// let mahasiswa1 = {
//     nama: 'Adi Kusuma',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo $(this.nama), selamat makan !`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Adi Kusuma 2',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo $(this.nama), selamat makan !`);
//     }
// }


//2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }

//     return mahasiswa;
// }

// let adi = Mahasiswa('Adi Kusuma', 10);
// let kusuma = Mahasiswa('Kusuma Jaya', 10);


//3. Constractor Function
//keyword new
// function Mahasiswa(nama, energi) {
//     //let mahasiswa = {};
//     this.nama = nama;
//     this.energi = energi;
    
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }

//     //return mahasiswa;
// }

// let adi = new Mahasiswa('Adi Kusuma', 10); //dont forget the keyword new

//4. Object.create()
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan !`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
}
function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
        mahasiswa.nama = nama;
        mahasiswa.energi = energi;
    
    
        return mahasiswa;
    }

let adi = Mahasiswa('Adi Kusuma', 10);
let kusuma = Mahasiswa('Kusuma Jaya', 10);