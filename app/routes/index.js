// se definen todas las rutas de la API
const express = require('express');
const foodRoute = require('./foods.route');

const router = express.Router();


router.use('/food', foodRoute);


module.exports = router;
