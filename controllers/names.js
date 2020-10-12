var Name = require('../models/name')

module.exports = {
    create,
    index,
}

async function index(req, res) {
    Name.find({}).then(names => { res.json(names) }).catch(err => { res.json(err) })
}

async function create(req, res) {
    try {
        await Name.create(req.body);
        res.status(201).json(name);
    } catch (err) {
        res.json({ err });
    }
}