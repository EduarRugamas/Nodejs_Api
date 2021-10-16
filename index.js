const express = require('express');
const {Client} = require('pg');
const config = require('./app/config/config.database');
const sequelize = require('./app/db');
const app = express();
const routes = require('./app/routes');
const PORT = 3000;

let server;
const env = process.env.NODE_ENV || 'development';
const database_url = config[env].url;

const client = new Client({
    connectionString: database_url
});

client.connect().then( ()=> {
    console.log('conectado a la base de datos postgres');
    sequelize.authenticate().then( ()=>{
        console.log('sequelize init');
        server = app.listen(PORT, ()=> {
            console.log(`Server init PORT-> ${PORT}`);
        });
    }).catch( (error)=> {
        console.log(`Error al conectar a la base de datos postgres ${error}`);
    });
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/v1', routes);

// app.listen(PORT, (err) => {
//     if (err) {
//         console.log(`error en el servidor ${err}`);
//     } else {
//         console.log(`Server init on PORT ${PORT}`);
//     }
// });
