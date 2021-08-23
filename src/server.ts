// require('dotenv').config();
require('dotenv/config');
import express, { Request, Response } from 'express'
import path from 'path'
const server = express()
 

import routes from '../src/GameController/GameController'
const connection = require('../src/database/database')

console.log( )



server.set('view engine', 'ejs')

server.use(express.static(path.join(__dirname, '../public' )))
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

server.use(routes)

server.use((req, res)=> {
    res.status(404).render('../src/views/pageError')
})

server.listen(process.env.PORT, ()=> {
    console.log('Server running - PORT ' +  process.env.PORT )
    connection
        .authenticate()
        .then(()=> {
            console.log("Banco de Dados conectado");
        })
        .catch((err: any)=> {
            console.log("Erro ao conectar Banco de Dados conectado");
        })
})