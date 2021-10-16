const express = require('express');
const {foodsController} = require('../controllers');

const router = express.Router();


router
    .route('/')
    .post( foodsController.createFood)
    .get(foodsController.getAllfoods);

router.route('/:id')
    .get(foodsController.getOneFood);

router.route('/name/:name')
    .get(foodsController.getFoodName)

module.exports = router;
