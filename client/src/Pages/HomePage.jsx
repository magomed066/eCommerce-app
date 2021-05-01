import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Product, Spinner, Message } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'

const HomePage = () => {
	const dispatch = useDispatch()
	const productList = useSelector((state) => state.productList)
	const { loading, error, products } = productList

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<Spinner />
			) : error ? (
				<Message variant="danger" children={error} />
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	)
}

export default HomePage
