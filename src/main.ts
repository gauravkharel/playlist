import { PrismaClient } from "@prisma/client";

//initializing prisma client
const prisma = new PrismaClient();

async function main(){
    const newArtist = await prisma.artist.create({
        data: {
            name: 'gaurav kharel',
            email: 'kharel619@gmail.com',
            songs: {
                create: {
                    title: 'Sing of me, I\'m dying of thirst' 
                }
            }
        }
    })

    console.log("created new artist: ", newArtist)
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())

