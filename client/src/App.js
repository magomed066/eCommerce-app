import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Footer, Header } from './components'
import { Container } from 'react-bootstrap'
import { HomePage, ProductPage, CartPage, LoginPage } from './Pages'

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/" component={HomePage} exact />
					<Route path="/product/:id" component={ProductPage} />
					<Route path="/cart/:id?" component={CartPage} />
					<Route path="/login" component={LoginPage} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
