import express, { Request, Response, NextFunction } from 'express';
import {router} from './routes';

const app = express();

//vamos utilizar formato json
app.use(express.json());

//qual arquivo vamos usar as rotas
app.use(router);

app.listen(3333, ()=> console.log("Servidor online!"))