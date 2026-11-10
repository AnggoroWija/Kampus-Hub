const express = require("express");
const router = express.Router();

const { createMahasiswa } = require("../controllers/mahasiswaController");

router.post("/", createMahasiswa);

module.exports = router;