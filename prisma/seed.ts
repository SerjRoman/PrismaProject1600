import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

// Создание продукта 
async function createProduct(){
    const product = await prisma.product.create({
        data: {
            name: 'First product',
            price: 2
        }
    })
    console.log(product)
}
// Удаления продукта по id
async function deleteProduct() {
    const product = await prisma.product.delete({
        where: {
            id: 1
        }
    })
    console.log(product)
}
// Обновления данных о продукте
async function updateProduct() {
    const product = await prisma.product.update({
        where: {
            id: 1
        },
        data: {
            name: 'Updated Product'
        }
    })
    console.log(product)

}

async function findProduct() {
    const product = await prisma.product.findUnique({
        where: {
            id: 1
        }
    })
    console.log(product)
}

async function main() {
    await createProduct()
    await findProduct()
    await updateProduct()
    await deleteProduct()
}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})