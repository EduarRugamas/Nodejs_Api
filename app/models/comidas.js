'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../db');

// const Comidas = sequelize.define(
//     'Comidas',
//     {
//         name: DataTypes.STRING,
//         receta: DataTypes.STRING,
//         pais: DataTypes.STRING,
//         imagen: DataTypes.STRING
//     },
//     {
//       freezeTableName: true
//     }
// );
const Comidas = class Comidas extends Model {
  static associate(models){
  }
};
Comidas.init({
        name: DataTypes.STRING,
        receta: DataTypes.STRING,
        pais: DataTypes.STRING,
        imagen: DataTypes.STRING
        },
    {
      sequelize,
      modelName: 'Comidas'
    });
module.exports = Comidas;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Comidas extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Comidas.init({
//     name: DataTypes.STRING,
//     receta: DataTypes.STRING,
//     pais: DataTypes.STRING,
//     imagen: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Comidas',
//   });
//   return Comidas;
// };
