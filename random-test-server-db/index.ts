import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        const user = await prisma.user.create({
            data: {
                email: "devarshibalu5913@gmail.com",
                password: "deva.balu@nitpy",
                name: "devarshi Balu"
            }
        });
        console.log(user);
    } catch (err: any) {
        console.log(`there is an error - error msg : ${err.message}`);
    }
}

main();
