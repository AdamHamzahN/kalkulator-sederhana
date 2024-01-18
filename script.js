var angkapertama, angkakedua;

    // Fungsi untuk mengambil nilai dari input
    function ambilNilai() {
      angkapertama = parseInt(document.getElementById("angkapertama").value);
      angkakedua = parseInt(document.getElementById("angkakedua").value);
    }

    // Fungsi untuk menghitung hasil sesuai operasi yang dipilih
    function hitung(operasi) {
      ambilNilai(); // Ambil nilai sebelum melakukan perhitungan

      var hasil;
      if (operasi === 'tambah') {
        hasil = angkapertama + angkakedua;
      } else if (operasi === 'kurang') {
        hasil = angkapertama - angkakedua;
      } else if (operasi === 'kali') {
        hasil = angkapertama * angkakedua;
      } else if (operasi === 'bagi') {
        hasil = angkapertama / angkakedua;
      }

      document.getElementById('hasil').innerHTML =  hasil;
    }