const Mahasiswa = require("../model/mahasiswa");

const createMahasiswa = async (req, res) => {
    try {
        const mahasiswaBaru = new Mahasiswa(req.body);

        await mahasiswaBaru.save();

        res.status(201).json({
            message: "Data berhasil ditambahkan!",
            data: mahasiswaBaru
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = { createMahasiswa };