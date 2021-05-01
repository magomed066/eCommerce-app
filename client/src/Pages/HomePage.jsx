import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Product, Spinner } from '../components'
import axios from 'axios'

const HomePage = () => {
	const [products, setProducts] = useState([])
	const [err, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios.get('http://localhost:5000/api/products').then(({ data }) => {
			if (data.status) {
				setProducts(data.products)
				setLoading(false)
			}

			if (!data.status) {
				setError(true)
			}
		})
	}, [])

	return loading ? (
		<Spinner />
	) : (
		<>
			<h1>Latest Products</h1>
			<Row>
				{err ? (
					<h2>Oops! Something went wrong!</h2>
				) : (
					products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))
				)}
			</Row>
		</>
	)
}

export default HomePage
