"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    //receber o token, token vem no header da requisicao
    const authToken = req.headers.authorization;
    //se nao tiver token
    if (!authToken) {
        return res.status(401).end();
    }
    //desconstruindo string
    const [, token] = authToken.split(" ");
    try {
        //validando token
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET); //falando que ele vai devolver o tipo PayLoad
        //recuperar o id do token e colocar dentro de uma variavel user_id dentro do request
        req.user_id = sub;
        //console.log(sub)
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
exports.isAuthenticated = isAuthenticated;
