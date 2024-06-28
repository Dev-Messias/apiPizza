import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string;
}

class SendOrderService{
    async execute({order_id}: OrderRequest){

        //atualizando item expecifico mudando draft para false
        const order = await prismaClient.order.update({
            where:{
                id: order_id
            },
            data:{
                draft: false
            }
        })

        return order

    }
}

export { SendOrderService }