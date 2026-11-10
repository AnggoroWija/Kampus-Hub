const express = require("express");
const path = require("path");
const connectDB = require("./config/config");
const mahasiswaRoutes = require("./Routes/mahasiswaRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menampilkan halaman HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Route mahasiswa
app.use("/mahasiswa", mahasiswaRoutes);

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server aktif di http://localhost:${PORT}`);
    });
};

startServer();