document.getElementById('formCek').addEventListener('submit', function(e) {
  e.preventDefault();

  const tanggalLahir = new Date(document.getElementById('tanggalLahir').value);
  const umur = new Date().getFullYear() - tanggalLahir.getFullYear();
  const pendidikan = document.getElementById('pendidikan').value;
  const tinggi = parseInt(document.getElementById('tinggi').value);
  const berat = parseInt(document.getElementById('berat').value);
  const statusNikah = document.getElementById('statusNikah').value;

  let hasil = '';

  if (umur >= 17 && umur <= 22 && tinggi >= 165 && statusNikah === "Belum") {
    hasil += "✅ Anda memenuhi syarat untuk jalur Bintara dan Perwira.<br>";
  } else {
    hasil += "❌ Maaf, Anda belum memenuhi syarat minimal.<br>";
  }

  document.getElementById('hasilCek').innerHTML = hasil;
});