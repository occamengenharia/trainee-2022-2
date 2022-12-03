import NaitonalityController from '../../controllers/NaitonalityController'

export default function Handle(req, res) {
    switch(req.method) {
        case "GET":
            NaitonalityController.show(req, res);
            break;
    }
}

export const config = {
    api: {
        externalResolver: true
    }
}