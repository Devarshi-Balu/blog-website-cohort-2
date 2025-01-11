import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate'

const getPrisma: any = (database_url: string) => {
    const prisma = new PrismaClient({
        datasourceUrl: database_url,
    }).$extends(withAccelerate())
    return prisma
}

export {
    getPrisma
}