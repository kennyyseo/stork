const express = require('express');
const router = express.Router();
const namesCtrl = require('../../controllers/names');

router.get('/', checkAuth, namesCtrl.index);
router.get('/:id', namesCtrl.show);
router.post('/', checkAuth, namesCtrl.create);
router.delete('/:id', checkAuth, namesCtrl.delete);
router.put('/:id', checkAuth, namesCtrl.update)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router;  