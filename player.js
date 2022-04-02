const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
router.get('/', playerController.list);
router.post('/add', playerController.save);
router.get('/delete/:id', playerController.delete);
router.get('/update/:id', playerController.edit);
router.post('/update/:id', playerController.update);
module.exports = router;