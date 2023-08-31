import { PrismaClient } from "@prisma/client";

//initializing prisma client
const prisma = new PrismaClient();

async function main(){

    //first prisma client query to post data
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

    const allArtists = await prisma.artist.findMany({
        include: {songs: true},
    })
    console.log("All artists: ")
    console.dir(allArtists, {depth: null})
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())

