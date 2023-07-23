import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/*
- Если существующая запись базы данных удовлетворяет where условию, 
она обновляет эту запись
- Если ни одна запись базы данных не удовлетворяет where условию, 
создается новая запись базы данных
*/ 


async function main() {
  const den = await prisma.user.upsert({
    where: { email: 'den@ya.by' },
    update: {},
    create: {
        email: "den@ya.by",
        name: "Denis",
        guitars: {
            createMany: {
                data: [
                    {id: 1, name: "Fender", type: "stratocaster"},
                    {id: 2, name: "Gibson", type: "les poul"},
                    {id: 3, name: "Musicman", type: "Bass"},
                ]
            }
        }
    }
  })

  const kate = await prisma.user.upsert({
    where: { email: 'kate@ya.by' },
    update: {},
    create: {
        email: "kate@ya.by",
        name: "Kate",
        guitars: {
            createMany: {
                data: [
                    {id: 17, name: "Fender", type: "telecaster"},
                    {id: 4, name: "Ibanez", type: "superStrat"}
                ]
            }
        }
    }
  })
  console.log({ den, kate })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })