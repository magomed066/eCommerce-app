import express from 'express'
import Product from '../models/productModel.js'

const router = express.Router()

router.get('/products', async (req, res) => {
	try {
		const products = await Product.find()

		// res.status(401)
		// res.json({ message: 'Not authorized!' })

		res.status(200).json(products)
	} catch (error) {
		res.status(404).json({
			message: 'Cannot get the',
		})
	}
})

router.get('/products/:id', async (req, res) => {
	const { id } = req.params

	try {
		const product = await Product.findById(id)

		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({
			message: 'Product not found!',
		})
	}
})

export default router
