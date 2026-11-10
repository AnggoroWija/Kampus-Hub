import { useState } from 'react';
import '../index.css';
import mahasiswa from '../data';

function Beranda() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMahasiswa, setSelectedMahasiswa] = useState(null);

  const hasilFilter = mahasiswa.filter((mhs) =>
    mhs.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="style2">
      <div id="style1">
        <main>
          <h1>Pengumuman Penting & Terbaru</h1>
          <p>Cari mahasiswa:</p>
          <input
            type="text"
            name="cari"
            id="cari"
            placeholder="masukkan nama mahasiswa..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedMahasiswa(null);
            }}
          />

          {searchQuery !== "" && (
            <ul id="list-hasil" className="list-mhs">
              {hasilFilter.length > 0 ? (
                hasilFilter.map((mhs, index) => (
                  <li
                    key={index}
                    className="item-mhs"
                    onClick={() => setSelectedMahasiswa(mhs)}
                    style={{ cursor: 'pointer' }}
                  >
                    {mhs.nama}
                  </li>
                ))
              ) : (
                <li className="item-mhs" style={{ color: 'red', listStyle: 'none' }}>
                  Mahasiswa tidak ditemukan
                </li>
              )}
            </ul>
          )}

          {selectedMahasiswa && (
            <div id="detail-mahasiswa">
              <div id="detailbox">
                <h3>Detail Data Mahasiswa</h3>
                <p><strong>Nama:</strong> {selectedMahasiswa.nama}</p>
                <p><strong>Prodi:</strong> {selectedMahasiswa.prodi}</p>
                <p><strong>IPK:</strong> {selectedMahasiswa.nilai}</p>
              </div>
            </div>
          )}

          <div id="article_wrapped">
            <article className="article">
              <h2>Judul Pengumuman 1</h2>
              <p>Dikabarkan seorang mahasiswa sedang kuliah jam 21:00 di Fakultas Teknik</p>
            </article>

            <article className="article">
              <h2>Judul Pengumuman 2</h2>
              <p>Mulai Tahun 2030, beasiswa naik 100% dari tahun sebelumnya</p>
            </article>

            <article className="article">
              <h2>Judul Pengumuman 3</h2>
              <p>Alat baru telah ditambahkan di Ruangan UKM</p>
            </article>
          </div>
        </main>

        <section style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '5px' }}>
          <h3>Tentang Web Ini</h3>
          <p>KampusHub adalah platform papan pengumuman digital resmi Universitas WA (UNIWA) untuk mempermudah sirkulasi informasi akademik.</p>
        </section>
      </div>

      <footer id="footer">
        Pemrograman Web - 2026 - [M. Anggoro Wijaya / 20252210174]
      </footer>
    </div>
  );
}

export default Beranda;
