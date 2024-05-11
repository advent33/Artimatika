let Bil1 = document.getElementById("Bil1");
let Bil2 = document.getElementById("Bil2");
let hasil = document.getElementById("hasil");

document.getElementById("Tambah").addEventListener("click", function() {
    hasil.value = parseFloat(Bil1.value) + parseFloat(Bil2.value);
});

document.getElementById("Kurang").addEventListener("click", function() {
    hasil.value = parseFloat(Bil1.value) - parseFloat(Bil2.value);
});

document.getElementById("Kali").addEventListener("click", function() {
    hasil.value = parseFloat(Bil1.value) * parseFloat(Bil2.value);
});

document.getElementById("Bagi").addEventListener("click", function() {
    hasil.value = parseFloat(Bil1.value) / parseFloat(Bil2.value);
});

document.getElementById("riset").addEventListener("click", function() {
    Bil1.value = '';
    Bil2.value = '';
    hasil.value = '';
})