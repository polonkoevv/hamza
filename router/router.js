import { Router } from "express"
import multer from "multer"
import myController from "../controller/controller.js"
const contactsRouter = new Router()

const storageConfig = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, `static/number`)
	},
	filename: (req, file, cb) => {
		const name = Buffer.from(file.originalname, 'latin1').toString('utf8')

		cb(null, name)
	}
})
const upload = multer({ storage: storageConfig })

// contactsRouter.get("/test", myController.test)
contactsRouter.get("/list", myController.listFiles)
contactsRouter.post("/create", upload.single("file"), myController.createService)

export default contactsRouter
