import prisma from '../lib/prisma'

class UserController {
    async create(req, res) {
        const user = await prisma.User.create({ data: req.body })

        return res.json(user)
    } 
}

export default new UserController()

/*
    PROTOCOLO HTTP
    Status Code:

    40x - ERROS DE SERVIDOR
    404 - Not Found
    403 - Probido
    400 - Bad Request

    20x - Sucesso
    200 - Sucesso

    www.site.com

    req.body = {
        nome: 'daniel'
        sobrenome: 'favero'
        .
        .
        .
    }
*/