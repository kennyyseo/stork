const express = require('express');
const router = express.Router();
const namesCtrl = require('../../controllers/names');

router.get('/', checkAuth, namesCtrl.index)
router.post('/', checkAuth, namesCtrl.create);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router; 