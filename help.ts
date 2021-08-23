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


//pagina games

// <% games.forEach(game => { %>
//     <tr>
//         <td class="px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap"><%= game.id %></td>
//         <td class="px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap"><%= game.title %></td>
//         <td class="px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap"><%= game.year %></td>
//         <td class="px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap"><%= game.price %></td>
//         <td>
//             <a href="admin/game/edit/<%= game.id %>"
//                 class="px-3 py-2 mr-2 text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800">
//                 Editar
//             </a>

//             <form method="POST" action="/admin/games/delete" style="display: inline;">
//                 <!-- this referenciando o formulario -->
                
//                 <button class="px-3 py-2 mt-3 text-white transition duration-300 bg-red-600 rounded hover:bg-red-500 hover:red-800">
//                    Deletar
//                </button>
//             </form>
//         </td>
//     </tr>
  
// <% }) %>

