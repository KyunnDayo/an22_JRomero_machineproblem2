const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticateUser } = require('../authsys/authSys');

router.post('/create', authenticateUser,orderController.createOrder);


router.get('/getorder', authenticateUser, orderController.getOrders);
router.get('/getall', authenticateUser, orderController.getAllOrders);


module.exports = router;