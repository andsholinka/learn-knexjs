const express = require('express');
const siswaController = require('../controllers/siswa.controller')
const router = new express.Router();

router.get('/siswa', siswaController.getSiswa)

router.get('/siswa/:id', siswaController.getSiswaById)

router.post('/siswa', siswaController.createSiswa)

router.put('/siswa/:id', siswaController.updateSiswa)

router.delete('/siswa/:id', siswaController.deleteSiswaById)

module.exports = router;