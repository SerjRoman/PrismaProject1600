import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main() {
    const product = await prisma.product.update({
        where: {
            id: 3
        },
        data: {
            name: "Super Updated Product"
        }
    })
    console.log(product)
}
main().then(() => {
    prisma.$disconnect()
}).catch((error) => {
    prisma.$disconnect()
    console.log(error)
})

