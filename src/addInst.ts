import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function () {
    try {
        const res = await prisma.guitars.create( 
            {data: {
                id: 4, name: "Ibanez", type: "superStrat"}
        })
        console.log(res)
        if(res) return "element created";
    } catch (err) {
    
        console.log(err)
        return err;
    } finally {
        await prisma.$disconnect()
    }
}