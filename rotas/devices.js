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


router.put('/:id', async (req, res) => {
    try {
        const updateDeviceId = await Device.updateOne(
            { _id: req.params.id },
            {
                kwh: req.body.kwh,
                corrente: req.body.corrente,
                voltagem: req.body.voltagem,
                fp: req.body.fp
            }
        )
        res.json({
            success: true,
            updated: updateDeviceId.nModified
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Erro ao atualizar device" + error
        })
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        const deleteDeviceId = await Device.deleteOne({
            _id: req.params.id
        })
        res.json({
            success: true,
            data: deleteDeviceId
        })
    } catch (error) {
        res.json({
            success: false,
            data: "Erro ao deletar" + error
        })
    }
})

module.exports = router;