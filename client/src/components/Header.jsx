import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/actions/userActions'

const Header = () => {
	const dispatch = useDispatch()

	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => dispatch(logout())

	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>ProShop</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<LinkContainer to="/cart">
								<Nav.Link className="cart">
									<i className="fas fa-shopping-cart"></i>
									<span className="products-counter">
										{cartItems.length}
									</span>{' '}
									Cart
								</Nav.Link>
							</LinkContainer>

							{userInfo ? (
								<NavDropdown
									className="ml-2"
									title={userInfo.name}
									id="username"
								>
									<LinkContainer to="/profile">
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<i className="fas fa-user"></i> Sign In
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
