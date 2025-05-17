const router = require('express').Router();
const Device = require('../model/devices');

router.get('/', async (req, res) => {
    try {
        const listDevices = await Device.find()
        res.json({
            success: true,
            message: listDevices
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Não foi possivel listar " + error
        })
    }
})

router.post('/', async (req, res) => {
    const novoDevice = new Device({
        nome: req.body.nome,
        kwh: req.body.kwh,
        corrente: req.body.corrente,
        voltagem: req.body.voltagem,
        fp: req.body.fp
    })

    try {
        const saveNovoDevice = await novoDevice.save()
        res.json({
            success: true,
            message: saveNovoDevice
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Erro ao cadastrar novo device" + error
        })
    }

})

module.exports = router;