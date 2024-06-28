import prismaClient from "../../prisma";

class ListOrderService{
    async execute(){
        //listando todas as ordens onde o draft e o estatus false
        const orders = await prismaClient.order.findMany({
            where:{
                draft: false,
                status: false,
            },
            orderBy:{
                created_at: 'desc'
            }
        })

        return orders;
    }
}

export {ListOrderService}