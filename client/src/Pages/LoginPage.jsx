import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/userActions'
import { Message, Spinner, FormContainer } from '../components'

const initialState = { email: '', password: '' }

const LoginPage = ({ location, history }) => {
	const [formData, setFormData] = useState(initialState)
	const redirect = location.search ? location.search.split('=')[1] : '/'

	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { loading, error, userInfo } = userLogin

	const onChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		if (userInfo) {
			history.push(redirect)
		}
	}, [userInfo, redirect, history])

	const submitHandler = (e) => {
		e.preventDefault()

		dispatch(login(formData))
	}

	return (
		<FormContainer>
			<h1>Sign In</h1>
			{error && <Message variant="danger">{error}</Message>}
			{loading && <Spinner />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter email"
						name="email"
						value={formData.email}
						onChange={onChangeHandler}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>Password address</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter password"
						name="password"
						value={formData.password}
						onChange={onChangeHandler}
					></Form.Control>
				</Form.Group>

				<Button type="submit" variant="primary">
					Sign In
				</Button>
			</Form>
			<Row className="py-3">
				<Col>
					New Customer?{' '}
					<Link
						to={
							redirect
								? `/register?redirect=${redirect}`
								: '/register'
						}
					>
						Register
					</Link>
				</Col>
			</Row>
		</FormContainer>
	)
}

export default LoginPage
