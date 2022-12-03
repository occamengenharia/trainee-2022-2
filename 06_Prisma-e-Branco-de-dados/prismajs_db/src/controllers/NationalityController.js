import prisma from '../lib/prisma'

class NaitonalityController {
    async show(req, res) {
        const nationalities = await prisma.Nationality.findMany()

        return res.json(nationalities)
    } 
}

export default new NaitonalityController()