import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';//importar sempre como segundo import
import cors from 'cors';
import {router} from './routes';
import  path from 'path';

const app = express();

//vamos utilizar formato json
app.use(express.json());

app.use(cors());//liberando para qualquer ip

//qual arquivo vamos usar as rotas
app.use(router);

//permitindo acesso a pasta das imagens, rota statica
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

//tratando erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    
    if(err instanceof Error){
        //Se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }

    //se for outro tipo de erro
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(3333, () => console.log("Servidor online!"))