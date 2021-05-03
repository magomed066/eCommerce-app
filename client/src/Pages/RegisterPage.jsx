import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/actions/userActions'
import { Message, Spinner, FormContainer } from '../components'

const initialState = { email: '', password: '', name: '', confirmPassword: '' }

const RegisterPage = ({ location, history }) => {
	const [formData, setFormData] = useState(initialState)
	const [message, setMessage] = useState('')
	const redirect = location.search ? location.search.split('=')[1] : '/'

	const dispatch = useDispatch()

	const userRegister = useSelector((state) => state.userRegister)
	const { loading, error, userInfo } = userRegister

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

		if (formData.password !== formData.confirmPassword) {
			setMessage('Please, input the same passwords')
			return
		}

		dispatch(register(formData))
	}

	return (
		<FormContainer>
			<h1>Sign Up</h1>
			{error && <Message variant="danger">{error}</Message>}
			{message && <Message variant="danger">{message}</Message>}
			{loading && <Spinner />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name"
						name="name"
						value={formData.name}
						onChange={onChangeHandler}
					></Form.Control>
				</Form.Group>
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

				<Form.Group controlId="confirmPassword">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Confirm password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={onChangeHandler}
					></Form.Control>
				</Form.Group>

				<Button type="submit" variant="primary">
					Sign Up
				</Button>
			</Form>
			<Row className="py-3">
				<Col>
					Have an account?{' '}
					<Link
						to={redirect ? `/login?redirect=${redirect}` : '/login'}
					>
						Login
					</Link>
				</Col>
			</Row>
		</FormContainer>
	)
}

export default RegisterPage
