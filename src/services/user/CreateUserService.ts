//responsavel por setar no banco as informações
import prismaClient from '../../prisma';
import {hash} from 'bcryptjs';

interface UserRequest{
    name: string
    email: string
    password: string
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        
        //vericar se ele enviou o email
        if(!email){
            throw new Error("Email incorreto")
        }

        //verificar se o email ja esta cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Usuário já existe")
        }

        const passwordHash = await hash(password, 8)

        //cadastrando no bd
        const user = prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            select:{
                id: true,
                name: true,
                email: true
                
            }
        })

        return user;
    }
}

export {CreateUserService};