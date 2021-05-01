import express from 'express'
import cors from 'cors'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config()

const app = express()
connectDB()

app.use(cors())

app.get('/', async (req, res) => {
	res.send('API is running')
})

app.get('/api/products', async (req, res) => {
	res.json({ status: true, products })
})

app.get('/api/products/:id', async (req, res) => {
	const product = products.find((item) => item._id === req.params.id)

	if (!product) {
		res.json({
			status: false,
			message: 'There is no such a product with that id!',
		})
	}

	res.json({ status: true, product })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
	console.log(`Server is running on port: ${PORT}`.yellow.bold),
)
