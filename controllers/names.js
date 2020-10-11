var Name = require('../models/name')

module.exports = {
    create,
}

async function create(req, res) {
    try {
        await Name.create(req.body);
    } catch (err) {
        res.json({ err });
    }
}