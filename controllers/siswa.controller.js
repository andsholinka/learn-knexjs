const siswaModel = require('../models/siswa.model');

class siswaController {
    async getSiswa(req, res) {
        try {
            const siswa = await siswaModel.getSiswa();
            res.status(200).send({
                status: res.statusCode,
                message: 'Successfully get All siswa',
                data: siswa
            })
        } catch (e) {
            console.log(e);
            res.status(400).send({
                status: res.statusCode,
                message: e.message
            })
        }
    }

    async getSiswaById(req, res) {
        try {
            const siswa = await siswaModel.getSiswaById(req.params.id);
            res.status(200).send({
                status: res.statusCode,
                message: 'Successfully get siswa',
                data: siswa
            })
        } catch (e) {
            console.log(e);
            res.status(400).send({
                status: res.statusCode,
                message: e.message
            })
        }
    }

    async createSiswa(req, res) {
        try {
            await siswaModel.createSiswa(req.body);
            console.log("success create new siswa");
            res.status(201).send({
                status: res.statusCode,
                message: 'Successfully create new siswa',
            })
        } catch (e) {
            console.log(e);
            res.status(400).send({
                status: res.statusCode,
                message: e.message
            })
        }
    }

    async updateSiswa(req, res) {
        try {
            await siswaModel.updateSiswa(req.body, req.params.id);
            console.log("success update data siswa");
            res.status(201).send({
                status: res.statusCode,
                message: 'Successfully update data siswa',
            })
        } catch (e) {
            console.log(e);
            res.status(400).send({
                status: res.statusCode,
                message: e.message
            })
        }
    }

    async deleteSiswaById(req, res) {
        try {
            await siswaModel.deleteSiswaById(req.params.id);
            res.status(200).send({
                status: res.statusCode,
                message: 'Successfully delete siswa',
            })
        } catch (e) {
            console.log(e);
            res.status(400).send({
                status: res.statusCode,
                message: e.message
            })
        }
    }

}

module.exports = new siswaController()