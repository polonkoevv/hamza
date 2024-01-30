import fs from "fs"

function changePath(filepath) {
	return filepath.replaceAll(/\\/g, "\/")
}


class myController {



	deleteFile(filepath) {
		try {
			let fp = `${path.resolve()}/static${filepath}`
			console.log("Deleting file: ", fp)
			console.log(fp)
			fs.unlink(fp, (err) => {
				if (err) {
					console.log(err)
				}
				else {
					console.log(`File ${fp} succ deleted`)
				}
			})
		} catch (error) {
			return error
		}


	}

	async test(req, res) {

		try {
			// const data = cnts
			// console.log("Requested contacts")
			res.send(
				"Its ok"
			)
		} catch (error) {
			res.send(error)
		}

	}


	async listFiles(req, res) {
		let list = ""
		fs.readdirSync("./static").forEach(file => {
			console.log(file)
			list += file + "\n"
		})
		res.send(list)
	}

	async createService(req, res) {
		const { title, description } = req.body
		console.log(title, description)
		let image = null
		if (req.file) {
			let path = changePath(req.file.path)
			const index = path.search("\/")
			image = "/" + path.slice(index + 1)
		}
		res.status(201).send()
	}

}

export default new myController