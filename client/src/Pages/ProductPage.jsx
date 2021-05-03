import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, ListGroup, Image, Button, Form } from 'react-bootstrap'
import { Rating, Spinner, Message } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../redux/actions/productActions'
import { useHistory } from 'react-router-dom'

const ProductPage = ({ match }) => {
	const [qty, setQty] = useState(1)
	const id = match.params.id
	const dispatch = useDispatch()
	const productDetails = useSelector((state) => state.productDetails)
	const { loading, error, product } = productDetails
	const history = useHistory()

	useEffect(() => {
		dispatch(listProductDetails(id))
	}, [dispatch, id])

	const addToCart = () => {
		history.push(`/cart/${id}?qty=${qty}`)
	}

	return (
		<>
			<Link className="btn btn-light" to="/">
				Go back
			</Link>
			{loading ? (
				<Spinner />
			) : error ? (
				<Message variant="danger" children={error} />
			) : (
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
							<ListGroup.Item>
								Price: ${product.price}
							</ListGroup.Item>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>${product.price}</Col>
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

								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col className="d-flex align-items-center">
												Qty
											</Col>
											<Col>
												<Form.Control
													as="select"
													style={{ width: '100px' }}
													custom
													value={qty}
													onChange={(e) =>
														setQty(e.target.value)
													}
												>
													{[
														...Array(
															product.countInStock,
														).keys(),
													].map((x) => (
														<option
															key={x + 1}
															value={x + 1}
														>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<Button
										className="btn-block"
										type="button"
										disabled={product.countInStock === 0}
										onClick={addToCart}
									>
										Add to cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	)
}

export default ProductPage
