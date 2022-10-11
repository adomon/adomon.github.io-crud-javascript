// Ketika tombol tambah data diklik
function tambahData() {
  // Varibel dari form input di tangkap
  let nim = document.forms["dataMahasiswa"]["nim"].value;
  let nama = document.forms["dataMahasiswa"]["nama"].value;
  let kelas = document.forms["dataMahasiswa"]["kelas"].value;
  let alamat = document.forms["dataMahasiswa"]["alamat"].value;

  // Variabel notifikasi
  let pesan = document.getElementById("pesan");

  // Variabel tabel ditangkap
  const tabel = document.getElementById("tabelMahasiswa");

  // Menambahkan baris pada tabel
  const baris = tabel.insertRow(1);

  // Menambahkan kolom pada baris yang dibuat
  const kolomNim = baris.insertCell(0);
  const kolomNama = baris.insertCell(1);
  const kolomKelas = baris.insertCell(2);
  const kolomAlamat = baris.insertCell(3);

  // Menampilkan data yang ditangkap ke depan
  kolomNim.innerHTML = nim;
  kolomNama.innerHTML = nama;
  kolomKelas.innerHTML = kelas;
  kolomAlamat.innerHTML = alamat;
}
