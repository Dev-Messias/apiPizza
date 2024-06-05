import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

    //receber o token, token vem no header da requisicao
    const authToken = req.headers.authorization;

    //se nao tiver token
    if (!authToken) {
        return res.status(401).end();
    }

    //desconstruindo string
    const [, token] = authToken.split(" ")

    
    try {
        //validando token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad; //falando que ele vai devolver o tipo PayLoad

        //recuperar o id do token e colocar dentro de uma variavel user_id dentro do request
        req.user_id = sub;

        //console.log(sub)
        return next();
        
    } catch (err) {
        return res.status(401).end();
    }

}