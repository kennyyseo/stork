var Name = require('../models/name')

module.exports = {
    create,
    index,
}

async function index(req, res) {
    const names = await Name.find({});
    res.status(200).json(names);
}

async function create(req, res) {
    try {
        const name = await Name.create(req.body);
        res.status(201).json(name);
    } catch (err) {
        res.json({ err });
    }
}