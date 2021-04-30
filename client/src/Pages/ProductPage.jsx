import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import products from '../db/products'
import { Rating } from '../components'

const ProductPage = ({ match }) => {
	const product = products.find((product) => product._id === match.params.id)

	return (
		<>
			<Link className="btn btn-light" to="/">
				Go back
			</Link>

			<Row className="mt-3">
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item className="d-flex">
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
						<ListGroup.Item>
							Description: ${product.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup>
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>{product.price}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0
											? 'In stock'
											: 'Out of stock'}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className="btn-block"
									type="button"
									disabled={product.countInStock === 0}
								>
									Add to cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ProductPage
