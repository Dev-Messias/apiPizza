//responsavel por receber diretamente a requisição e repassar para o serviço
import {Request, Response} from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController{
    async handle(req: Request, res: Response){
        //pegando dados 
        const {name, email, password} = req.body;

        //instanciando o serviço
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            password
        });
        return res.json(user)
    }
}

export { CreateUserController }