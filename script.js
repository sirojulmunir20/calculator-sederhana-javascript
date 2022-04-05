// variabel untuk mengambil data input dengan id output-screen
let outputScreen = document.getElementById("output-screen");
// fungsi untuk mengaktifkan button number 
function display(num){
    outputScreen.value += num;
}
// fungsi untuk menghitung angkanya untuk dieksekusi, jika memasukkan character yang salah maka akan memunculkan alert 
function calculator(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch{
        alert("invalid MASZZE🤪")
    }
}
// fungsi untuk menghapus angka secara keseluruhan langsung 
function bersihkan(){
    outputScreen.value = "";
}
// fungsi untuk menghapus angka per unit
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}

