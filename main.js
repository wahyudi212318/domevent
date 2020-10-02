// console.log(`tes aja dulu`)

// kita buat sebuah fungsi untuk
// memunculkan MODAL
const showModal = () => {
    // kita dapatkan elemen MODAL
    // yang mau dimunculkan
    // jika yang ingin dipilih by ID
    let modal = document.getElementById("modalMenu")

    //kita atur styling element modalnya
    modal.style.display = "flex"
}

const closedModal = () => {
    let modal = document.getElementById("modalMenu")
    modal.style.display = "none"
}

// memasukan gambar di showcase
// kita ambil dulu elemnt yang kita inginkan

let showcase = document.getElementById('wrapper_showcase')
let nama = 'WAHYUDI'
// getelementbyid = menggunakan id selector
// queryselector = menggunakan class selector

// kita inject elemennya dengan syntax html
// fungsi + ladalah untuk menambahkan element yang ada di html
// jika tidak ada + makan akan menghapus apapun yang sebelumnya ada di dalam HTML

// showcase.innerHTML += `
// {/* <img src="https://picsum.photos/seed/12/300" alt="gambar no 12" /> */} */}
// `

for (var i = 0; i < 36; i++) {
    showcase.innerHTML += `
<img src="https://picsum.photos/seed/${1000 + i}/150" alt="gambar ke ${i}" />

`
}