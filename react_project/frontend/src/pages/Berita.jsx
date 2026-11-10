import { useState, useEffect } from "react";
import '../index.css';

export default function Berita() {
  const [daftarberita, setdaftarberita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data API berhasil diterima:", data);
        setdaftarberita(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ padding: '20px' }}>
      <h1>Berita Kampus Terbaru</h1>

      {loading && <p style={{ color: 'blue' }}>⏳ Sedang memuat berita dari API...</p>}

      {error && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          ❌ Terjadi kesalahan: {error}
        </p>
      )}

      {!loading && !error && daftarberita.length === 0 && (
        <p>Tidak ada berita ditemukan.</p>
      )}

      <div id="article_wrapped">
        {daftarberita.map((berita) => (
          <article key={berita.id} className="article">
            <h2 style={{ textTransform: 'capitalize' }}>{berita.title}</h2>
            <p>{berita.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
