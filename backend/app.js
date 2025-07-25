import express from "express"
import dotenv from "dotenv"
import { connectDatabase } from "./config/dbConnect.js"
import productRoutes from "./routes/products.js"
const app = express()

dotenv.config({path: "config/config.env"})

connectDatabase()
app.use(express.json())

app.use("/api/v1",productRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`PORTUMUZ DINLENILIR : ${process.env.PORT} ve ${process.env.NODE_ENV} MUHITINDEDIR`)
})