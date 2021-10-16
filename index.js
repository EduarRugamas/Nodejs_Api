const express = require('express');
const {Client} = require('pg');
const config = require('./app/config/config');
const sequelize = require('./app/db');
const cors = require('cors');
const app = express();
const routes = require('./app/routes');


let server;
const env = process.env.NODE_ENV || 'development';
const databaseUrl = config[env].url;

const client = new Client({
    connectionString: databaseUrl
});

client.connect().then( ()=> {
    console.log('conectado a la base de datos postgres');
    sequelize.authenticate().then( ()=>{
        console.log('sequelize init');
        server = app.listen(config.port, ()=> {
            console.log(`Server init PORT-> ${config.port}`);
        });
    }).catch( (error)=> {
        console.log(`Error al conectar a la base de datos postgres ${error}`);
    });
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.options('*', cors());

app.use('/v1', routes);

if (config.env === 'production'){
    app.use('/v1', routes);
}

// app.listen(PORT, (err) => {
//     if (err) {
//         console.log(`error en el servidor ${err}`);
//     } else {
//         console.log(`Server init on PORT ${PORT}`);
//     }
// });
