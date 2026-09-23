import mahasiswa from "../react_project/src/data.js";

const inputCari = document.getElementById("cari");
const listhasil = document.getElementById("list-hasil")
const detailmahasiswa = document.getElementById("detail-mahasiswa")

inputCari.addEventListener("input", function () {
    const keyword = inputCari.value.toLowerCase();
    listhasil.innerHTML = "";
    detailmahasiswa.innerHTML = "";
    if (keyword === "") return;

    const hasilFilter = mahasiswa.filter(mhs =>
        mhs.nama.toLowerCase().includes(keyword)
    );
    hasilFilter.forEach(mhs => {
        const li = document.createElement("li");
        li.classList.add("item-mhs");
        li.textContent = mhs.nama;

        li.addEventListener("click", function () {
            tampilkanDetail(mhs);
        });
        listhasil.appendChild(li);
    });
});

function tampilkanDetail(mhs) {
    detailmahasiswa.innerHTML = `
    <div id="detail-box">
    <h3>Detail Data Mahasiswa</h3>
    <p><strong>Nama:</strong> ${mhs.nama}</p>
    <p><strong>Prodi:</strong> ${mhs.prodi}</p>
    <p><strong>IPK:</strong> ${mhs.nilai}</p>
    </div>
    `;
}
