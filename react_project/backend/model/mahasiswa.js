const mongoose = require("mongoose");
const mahasiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nim: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    umur: {
        type: Number
    }
});

const Mahasiswa = mongoose.model(
    "Mahasiswa",
    mahasiswaSchema
);

module.exports = Mahasiswa;