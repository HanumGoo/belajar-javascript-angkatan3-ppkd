const tableBody = document.getElementById("table-body");

const students = [
  {
    nim: 123123,
    nama: "Ahmad Fauzi",
    prodi: "IT",
    gender: "Laki-laki",
    alamat: "Kampung Sawah",
  },
  {
    nim: 123124,
    nama: "Siti Rahmawati",
    prodi: "SI",
    gender: "Perempuan",
    alamat: "Jalan Merdeka No. 5",
  },
  {
    nim: 123125,
    nama: "Budi Santoso",
    prodi: "IT",
    gender: "Laki-laki",
    alamat: "Gang Kelinci No. 12",
  },
  {
    nim: 123126,
    nama: "Dewi Lestari",
    prodi: "DKV",
    gender: "Perempuan",
    alamat: "Perumahan Indah Blok C",
  },
  {
    nim: 123127,
    nama: "Eko Prasetyo",
    prodi: "IT",
    gender: "Laki-laki",
    alamat: "Jalan Kebon Jeruk",
  },
  {
    nim: 123128,
    nama: "Fitriani",
    prodi: "SI",
    gender: "Perempuan",
    alamat: "Kampung Baru RT 03",
  },
  {
    nim: 123129,
    nama: "Gilang Ramadhan",
    prodi: "IT",
    gender: "Laki-laki",
    alamat: "Jalan Mawar Melati",
  },
  {
    nim: 123130,
    nama: "Hany Handayani",
    prodi: "DKV",
    gender: "Perempuan",
    alamat: "Komp. Dosen IKIP",
  },
  {
    nim: 123131,
    nama: "Irfan Hakim",
    prodi: "IT",
    gender: "Laki-laki",
    alamat: "Jalan Anggrek No. 45",
  },
  {
    nim: 123132,
    nama: "Julia Perez",
    prodi: "SI",
    gender: "Perempuan",
    alamat: "Kampung Sawah Barat",
  },
  {
    nim: 123133,
    nama: "Kevin Sanjaya",
    prodi: "IT",
    gender: "Laki-laki",
    alamat: "Perum Permata Sari",
  },
  {
    nim: 123134,
    nama: "Larasati",
    prodi: "DKV",
    gender: "Perempuan",
    alamat: "Jalan Flamboyan Raya",
  },
  {
    nim: 123135,
    nama: "Muhammad Rizky",
    prodi: "IT",
    gender: "Laki-laki",
    alamat: "Gang Damai No. 8",
  },
  {
    nim: 123136,
    nama: "Nabila Syakieb",
    prodi: "SI",
    gender: "Perempuan",
    alamat: "Jalan Cempaka Putih",
  },
  {
    nim: 123137,
    nama: "Oki Setiawan",
    prodi: "IT",
    gender: "Laki-laki",
    alamat: "Kampung Sawah Timur",
  },
];

for (let i = 0; i < students.length; i++) {
  const baris = document.createElement("tr");
  baris.innerHTML = `<tr>
    <td class="${"student-" + i}">${students[i].nim}</td>
    <td class="${"student-" + i}">${students[i].nama}</td>
    <td class="${"student-" + i}">${students[i].prodi}</td>
    <td class="${"student-" + i}">${students[i].gender}</td>
    <td class="${"student-" + i}">${students[i].alamat}</td>
    <td><button id="student-button-${i}">Delete</button></td>
</tr>`;

  baris.querySelector(`#student-button-${i}`).addEventListener("click", () => {
    baris.remove();
  });
  tableBody.appendChild(baris);
}

function deleteButton(id) {}
