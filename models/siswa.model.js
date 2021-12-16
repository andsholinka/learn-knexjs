const db = require('../config/db')

class siswaModel {
    getSiswa() {
        const siswa = db('siswa')
        return siswa;
    }

    getSiswaById(id) {
        const siswa = db('siswa').where('id', id)
        return siswa;
    }

    createSiswa(dataSiswa) {
        const {
            nama,
            kelas,
            umur,
            telp,
            ortu
        } = dataSiswa
        const siswa = db('siswa').insert({
            'nama': nama,
            'kelas': kelas,
            'umur': umur,
            'telp': telp,
            'ortu': ortu,
        })
        return siswa;
    }

    updateSiswa(dataSiswa, id) {
        const {
            nama,
            kelas,
            umur,
            telp,
            ortu
        } = dataSiswa
        const siswa = db('siswa').where('id', id).update({
            'nama': nama,
            'kelas': kelas,
            'umur': umur,
            'telp': telp,
            'ortu': ortu,
        })
        return siswa;
    }

    deleteSiswaById(id) {
        const siswa = db('siswa').where('id', id).del()
        return siswa;
    }

}

module.exports = new siswaModel()