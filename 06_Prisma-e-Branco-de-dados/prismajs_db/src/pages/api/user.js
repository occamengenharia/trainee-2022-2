import UserController from '../../controllers/UserController'

export default function Handle(req, res) {
    switch(req.method) {
        case "POST":
            UserController.create(req, res);
            break;
    }
}

export const config = {
    api: {
        externalResolver: true
    }
}