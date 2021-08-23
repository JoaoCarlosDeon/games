import express, { Request, Response } from 'express'
const routes = express.Router()
const Game = require('../../src/GameModel/GameModel')

routes.get('/', async (req: Request, res: Response)=> {
    res.render("../src/views/index")
})

routes.get('/games', async (req, res)=> {
    await Game.findAll({
        // order: [[ "id", "DESC" ]]
    })
    .then((games: any)=> {
            res.render("../src/views/games", {
                games
            })
        })
    .catch((error: any)=> {
        res.redirect('/games')
    })
})

routes.get("/admin/new-game", (req, res)=> {
    res.render("../src/views/new-game")
})


routes.post("/new-game/save", async (req, res)=> {    
    const { title, year, price } = req.body
    
    if(title != undefined) {
        await Game.create({
            title,
            year,
            price
        }).then(()=> {
            res.redirect('/games')
        })
    }else {
        res.redirect('/games')
    }
})

routes.get('/admin/game/edit/:id', async (req, res)=> {
    const { id } = req.params
    await Game.findByPk(id)
        .then((game:any)=> {
            res.render('../src/views/edit', {
                game: game
            })
            if(game != undefined) { //se achar o game

            }else { //se fr nulo
                res.redirect('/')
            }

        })
        .catch((error:any)=> {
            res.redirect('/')
        })
})

routes.post('/admin/game/update', async (req, res)=> {
    const { id, title, year, price } = req.body
    await Game.update({ title, year, price }, {
        where: {
            id: id
        }
    }).then(()=> {
        res.redirect('/games')
    }).catch((error: any)=> {
        res.redirect('/')
    })
})

routes.post('/admin/games/delete', async (req, res)=> {
    const { id } = req.body // se esse id tiver o mesmo id do banco de dados
    
    if(id != undefined) { //se o id é válido, diferente de nulo
        if(!isNaN(id)){ //se for número

            await Game.destroy({
                where: {
                    id: id
                }
            }).then(()=> {
                res.redirect('/games')
            }).catch((error:any)=> {
                res.redirect('/games')
            })

        }else { //se não for número
            res.redirect('/games')
        }
    }else { //se for nulo
        res.redirect('/games')
    }
})


export default routes






