const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { foodService } = require('../services');
const _ = require('lodash');


const createFood = catchAsync( async (req, res) => {
    const food = await foodService.createFood(req.body);

    if (_.isEmpty(food)){
        res.statusCode(httpStatus.NO_CONTENT).send({
            code: `${httpStatus.NO_CONTENT}`,
            message: 'No Content for send data '
        });
        console.log(`CODE -> ${httpStatus.NO_CONTENT}, Struct JSON Empty`)
    }else {
        res.status(httpStatus.CREATED).send(food);
    }
});

const getAllfoods = catchAsync(async (req, res) => {
    const result = await foodService.getFoods();
    res.send(result);
});

const getOneFood = catchAsync(async (req, res) => {
     const result = await foodService.getFoodId(req.params.id);
     if (!result){
         res.send({
             error: `${httpStatus.NOT_FOUND} Registro no encontrado`
         })
         throw console.log(`Status:${httpStatus.NOT_FOUND}, Food not found`)
     };
     res.send(result);
});

const getFoodName = catchAsync( async (req, res) => {
    const result =  await foodService.getFoodForName(req.params.name);
    if (!result){
        res.send({
            error: `${httpStatus.NOT_FOUND} Registro no encontrado`
        })
        throw console.log(`Status:${httpStatus.NOT_FOUND}, Food not found`)
    }
    res.send(result)
});


module.exports = {
    createFood,
    getAllfoods,
    getOneFood,
    getFoodName
}
