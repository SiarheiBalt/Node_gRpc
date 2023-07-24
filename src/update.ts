import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function update() {
    try {
        const res = await prisma.guitar.update({
            where: {id: 9},
            data: {
                id: 9, name: "No name", type: "self", userId: 2
            }
        })
        console.log(res)
        if(res) return res;
    } catch (err) {
        console.log(err)
        return err;
    } finally {
        await prisma.$disconnect()
    }
}

export async function findMany() {
    try {
        const res = await prisma.guitar.findMany({
             where: { 
                userId: 1,
                name: "Fender"
              },
        })
        console.log(res)
        if(res) return res;
    } catch (err) {
        console.log(err)
        return err;
    } finally {
        await prisma.$disconnect()
    }
}

export async function findAndUpdate() {
    try {
        const res = await prisma.user.update({
             where: { 
                id: 2,
              },
              data: {
                profile: {
                   update: {
                        city: "Vilnius",
                        mobile: 12345678
                   }
                }
              }
        })
        console.log(res)
        if(res) return res;
    } catch (err) {
        console.log(err)
        return err;
    } finally {
        await prisma.$disconnect()
    }
}