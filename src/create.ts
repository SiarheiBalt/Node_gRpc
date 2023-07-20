import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function () {
    try {
        const data = [
            {id: 1, name: "Fender", type: "stratocaster"},
            {id: 2, name: "Gibson", type: "les poul"},
            {id: 3, name: "Musicman", type: "Bass"},
        ]
        const res = await prisma.guitars.createMany({
            data,
            skipDuplicates: true
        })
        console.log(res)
        if(res) return "bd created";
    } catch (err) {
        return err;
        console.log(err)
    } finally {
        await prisma.$disconnect()
    }
}