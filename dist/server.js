"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors"); //importar sempre como segundo import
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const path_1 = __importDefault(require("path"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
//vamos utilizar formato json
app.use(express_1.default.json());
app.use((0, cors_1.default)()); //liberando para qualquer ip
app.use((0, express_fileupload_1.default)({
    limits: { fileSize: 50 * 1024 * 1024 } // no maximo 50mb img
}));
//qual arquivo vamos usar as rotas
app.use(routes_1.router);
//permitindo acesso a pasta das imagens, rota statica
app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'tmp')));
//tratando erro
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        //Se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        });
    }
    //se for outro tipo de erro
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});
app.listen(process.env.PORT, () => console.log("Servidor online!"));
