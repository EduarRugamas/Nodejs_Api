const httpStatus = require('http-status');
const _ = require('lodash');
const sequelize = require('../db');
const isEmpty = require('lodash.isempty');

const { Comidas } = require('../models');

const getStatus = (status) =>{
    try {
        const row = {
            where: {
                id: status
            },
            order: [['id', 'DESC']]
        };
        return row;
    }catch (error) {
        throw console.log(`${httpStatus.INTERNAL_SERVER_ERROR}, Ah ocurrido un error -> ${error}`)
    }
}

const createFood = async (foodBody) => {
    // const food = foodBody.food_information;

    let foodData;

    try {

            foodData = await Comidas.create(foodBody);

        return foodData;
    }catch (error) {
        if (_.get(foodData, 'id')) food.destroy({ where: { id: _.get(foodData, 'id') } });
        throw console.log(`${httpStatus.BAD_REQUEST}, Ah Ocurrido un Error -> ${error}`);
    }
};

const getFoods = async ()=> {
    try {
        const options = await getStatus(2);
        const foods = await Comidas.findAll();
        return foods;
    }catch (error) {
        throw console.log(`${httpStatus.BAD_REQUEST}, Ah ocurrido un Error -> ${error}`);
    }
}

const getFoodId = async (id) => {
    const food = await Comidas.findOne({
       where: {
           id: id
       }
    });
    return food;
}

const getFoodForName = async (name) => {
        // try {
        //     const query = `SELECT * FROM public."Comidas" WHERE name = '${name}';`;
        //     await sequelize.authenticate();
        //     const result = await sequelize.query(query)
        //
        // }catch (error) {
        //     throw console.log(`${httpStatus.BAD_REQUEST}, Ah ocurrido un Error -> ${error}`);
        // }

  const food = await Comidas.findOne({
      where:{
          name: `${name}`
      }
  });
    return food;
};

module.exports = {
    createFood,
    getFoods,
    getFoodId,
    getFoodForName
}
