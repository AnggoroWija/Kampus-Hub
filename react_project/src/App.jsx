import { useState } from 'react';
import './index.css'; 
import mahasiswa from './data'; 

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedMahasiswa, setSelectedMahasiswa] = useState(null);

  const hasilFilter = mahasiswa.filter((mhs) =>
    mhs.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="style2">
      <div id="style1">
        
        <header>
          <div id="heading">
            <h2><b>KampusHub</b></h2>
            <p><b>Papan Pengumuman UNIWA</b></p>
          </div>
          
          <nav id="nav">
            <a href="index.html">Beranda</a> |{' '}
            <a href="about.html">About</a>
          </nav>            
        </header>

        <main>
          <h1>Pengumuman Terbaru</h1>
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
              {hasilFilter.map((mhs, index) => (
                <li 
                  key={index} 
                  className="item-mhs" 
                  onClick={() => setSelectedMahasiswa(mhs)}
                  style={{ cursor: 'pointer' }} 
                >
                  {mhs.nama}
                </li>
              ))}
            </ul>
          )}

          {selectedMahasiswa && (
            <div id="detail-mahasiswa">
              <div id="detail-box">
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

        <h3>Tentang Web Ini</h3>
        <section></section>
      </div>
      
      <footer id="footer">
        Pemrograman Web - 2026 - [M. Anggoro Wijaya / 20252210174]
      </footer>
    </div>
  );
}

export default App;
