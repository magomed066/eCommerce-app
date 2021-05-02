import Product from '../models/productModel.js'

export const getProducts = async (req, res) => {
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
}

export const getProductById = async (req, res) => {
	const { id } = req.params

	try {
		const product = await Product.findById(id)

		if (!product) {
			res.status(404).json({
				message: 'Product not found!',
			})
		}

		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({
			message: 'Product not found!',
		})
	}
}
