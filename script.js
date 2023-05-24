//sambutan biar asik aja heheh
window.onload = setTimeout(Sambutan,2000)
function Sambutan() {
    alert("Halo, Selamat datang di website Kalkulator Persegi.\nDisini Anda bisa menghitung luas dan keliling persegi!")
}

//Melakukan proses hitung luas pergsegi
function hitungLuas(){
    //megambil nilai input user
    var sisiLuas = document.getElementById("sisi-luas").value;
    //fungsi logika dan validasi
    if(parseInt(sisiLuas)){
        //rumus hitung luas
        var luas = sisiLuas * sisiLuas;
        //menampilkan hasil
        document.getElementById("rumus_luas").innerHTML = "L = S ✕ S"
        document.getElementById("prosesHitung_luas").innerHTML = "L = " +sisiLuas+" ✕ "+sisiLuas ;
        document.getElementById("output_luas").innerHTML = "L = " +luas;
    } else {
        //validasi jika input bukan berupa angka
        alert("Masukkan input hanya berupa angka!")
    }
}

//fungsi untuk menghapus log sebelumya
function resetLuas(){
    //membuat string kosong untuk fitur reset
    document.getElementById("sisi-luas").value = "";
    document.getElementById("output_luas").innerHTML = "";
    document.getElementById("prosesHitung_luas").innerHTML = "";
    document.getElementById("rumus_luas").innerHTML = "";
}

//fungsi untuk menghitung keliling persegi
function hitungKeliling(){
    //mengambil nilai yang diinputkan user
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    //fungsi logika dna validasi input berupa angka
    if(parseInt(sisiKeliling)){
        //rumus keliling persegi
        var keliling = sisiKeliling * 4;
        //menampilkan hasil hitung
        document.getElementById("rumus_keliling").innerHTML = "L = S ✕ 4"
        document.getElementById("prosesHitung_keliling").innerHTML = "L = " +sisiKeliling+" ✕ 4" ;
        document.getElementById("output_keliling").innerHTML = "L = " +keliling;

    } else {//validasi jika input user bukan angka
        alert("Masukkan input hanya berupa angka!")
    }
}

//fitur hapus log sebelumnya
function resetKeliling(){
    //menghapus log dengan set string kosong pada tag
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("output_keliling").innerHTML = "";
    document.getElementById("prosesHitung_keliling").innerHTML = "";
    document.getElementById("rumus_keliling").innerHTML = "";
}