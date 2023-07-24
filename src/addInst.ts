import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function () {
    try {
        const res = await prisma.guitar.create({
            data: {
                id: 9, name: "Cort", type: "superStrat", userId: 2
            }
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