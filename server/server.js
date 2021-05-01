import express from 'express'
import cors from 'cors'
import products from './data/products.js'

const app = express()

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

app.listen(5000, () => console.log('Server is running on port: 5000'))
