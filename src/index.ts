import { PrismaClient } from "@prisma/client";
import express from 'express'

const prisma = new PrismaClient()

const app = express()

//adding the middleware to process JSON data
app.use(express.json())

app.get('/artists', async(req, res) => {
    const artists = await prisma.artist.findMany()
    res.json({
        success: true,
        payload: artists,
        message: "Operation Successful"
    })
})

//adding the first route
app.use((req, res, next) => {
    res.status(404);
    return res.json({
            success: false,
            payload: null,
            message: `API Says: endpoint not found for path: ${req.path}`
    })
})

//start the server at 3000
app.listen(3000, () => 
    console.log(`Rest API server ready at: http://localhost:3000`)
 )


