import Sequelize from 'sequelize'
const connection: any = require('../database/database')

const Game = connection.define('games', {
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        // validate: {
        //     notEmpty: {
        //         msg: "Esse campo não pode ser vazio"
        //     }
        // },
        // len: {
        //     args: [4,20],
        //     msg: "Esse campo deve ter entre 4 e 20 caracteres"
        // }
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // validate: {
        //     notEmpty: {
        //         msg: "Esse campo não pode ser vazio"
        //     }
        // }
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        // validate: {
        //     notEmpty: {
        //         msg: "Esse campo não pode ser vazio"
        //     }
        // },
    }
})


Game.sync({ force: false })
    .then(()=> {
        console.log('Table (game) criada com sucesso')
    })
    .catch((msgErro: any)=> {
        console.log('Erro ao cria Table (game)'), msgErro;
        
    })

module.exports = Game



