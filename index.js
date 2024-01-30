import cookieParser from "cookie-parser"
import cors from "cors"
import express from "express"
import path from 'path'
import myRouter from "./router/router.js"
const __dirname = path.resolve()

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors()) // Use this after the variable declaration
app.use(cookieParser())

app.use("/", myRouter)
app.use(express.static(path.resolve(__dirname, 'static')))

app.listen(PORT, () => {
	console.log(`Server is running on PORT = ${PORT}`)
})
