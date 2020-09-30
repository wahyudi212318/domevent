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