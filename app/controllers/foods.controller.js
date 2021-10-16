const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { foodService } = require('../services');


const createFood = catchAsync( async (req, res) => {
    const food = await foodService.createFood(req.body);
    res.status(httpStatus.CREATED).send(food);
});

const getAllfoods = catchAsync(async (req, res) => {
    const result = await foodService.getFoods();
    res.send(result);
});

const getOneFood = catchAsync(async (req, res) => {
     const result = await foodService.getFoodId(req.params.id);
     if (!result){
         res.send({
             error: 'El Id es incorrecto o no existe el registro'
         })
         throw console.log(`Status:${httpStatus.NOT_FOUND}, Food not found`)
     };
     res.send(result);
});

const getFoodName = catchAsync( async (req, res) => {
    const result =  await foodService.getFoodForName(req.params.name);
    if (!result){
        res.send({
            error: 'El registro no existe o el nombre es incorrecto'
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
