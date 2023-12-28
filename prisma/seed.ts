import { PrismaClient } from "prisma/generated/mongodb";
const prisma = new PrismaClient()
 
const main = async () => {

   await prisma.posts.createMany({
        data: [
            { title: 'title One', body: "body One" },
            { title: 'title Two', body: "body Two" },
            { title: 'title Three', body: "body Three" }
        ]
    })

    const Posts = await prisma.posts.findMany()

    console.log({ Posts: Posts })
}


main().then(async () => {
    await prisma.$disconnect()


}).catch(async (e) => {

    console.error(e)
    await prisma.$disconnect()

    process.exit(1)

})