import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function () {
    try {
        const res = await prisma.user.create( 
            {data: {
                id: 4, name: "Denis", email: "den@ya.by"}
        })
        console.log(res)
        if(res) return "user created";
    } catch (err) {
    
        console.log(err)
        return err;
    } finally {
        await prisma.$disconnect()
    }
}