const DriverReq = require('../model/driverReqModel.js');
const { json } = require('express')

exports.getAllDrivers = async (req, res, next) => {
    try {
        const driverReq = await DriverReq.find()
        res.status(200).json({ data: driverReq, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createDriver = async (req, res) => {
    try {
        console.log("PATH TEST")
        console.log(req.body)
        const driverReq = await DriverReq.create(req.body);
        console.log(req.body.name)
        res.json({ data: driverReq, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


exports.getDriver = async (req, res) => {
    try {
        const driverReq = await DriverReq.findById(req.params.id);
        res.json({ data: driverReq, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.deleteDriver = async (req, res) => {
    try {
        const driverReq = await DriverReq.findByIdAndDelete(req.params.id);
        res.json({ data: driverReq, status: 'success' });

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}