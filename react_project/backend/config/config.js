const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb://127.0.0.1:27017/kampusHub';
    
    // Melakukan koneksi ke MongoDB
    const conn = await mongoose.connect(mongoURI);
    
    console.log(`MongoDB Terhubung: ${conn.connection.host} 🎉`);
  } catch (error) {
    console.error(`Error Koneksi Database: ${error.message}`);
    process.exit(1); // Menghentikan aplikasi jika database gagal terhubung
  }
};

module.exports = connectDB;