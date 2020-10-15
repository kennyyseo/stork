var Name = require('../models/name')

module.exports = {
    create,
    index,
    show,
    delete: deleteOne,
    update,
}

async function index(req, res) {
    try {
        const names = await Name.find({});
        res.status(200).json(names);
    } catch (err) {
        res.json({ err });
    }
}

async function show(req, res) {
    try {
        const name = await Name.findById(req.params.id);
        res.status(200).json(name);
    } catch (err) {
        res.json({ err });
    }
}

async function create(req, res) {
    try {
        req.body.user = req.user
        const name = await Name.create(req.body);
        res.status(201).json(name);
    } catch (err) {
        res.json({ err });
    }
}

async function deleteOne(req, res) {
    try {
        const deletedName = await Name.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedName);
    } catch (err) {
        res.json({ err });
    }
}

async function update(req, res) {
    try {
        const updatedName = await Name.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedName);
    } catch (err) {
        res.json({ err });
    }
}