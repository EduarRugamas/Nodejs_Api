const dotenv = require('dotenv');
const path = require('path');
const Joi = require('@hapi/joi');

dotenv.config({path:path.join(__dirname, '../../.env')});

const envVarSchema = Joi.object()
        .keys({
          NODE_ENV: Joi.string().valid('development').required(),
          PORT: Joi.number().default(1020),
          DATABASE_URL: Joi.string().required().description('database url'),

        }).unknown()

const { value: envVar, error } = envVarSchema.prefs({errors: {label: 'key'}}).validate(process.env);

if (error){
    console.log(`\`Configuracion invalida error ->: ${error.message}\``);
    throw new Error(`Configuracion invalida error ->: ${error.message}`);
}

module.exports = {
    env: envVar.NODE_ENV,
    port: envVar.PORT,
    development: {
        url: envVar.DATABASE_URL,
        dialect: 'postgresql'
    },
    dbPool: {
        development: {idle:10000, acquire:60000, evict:1000}
    }
};
