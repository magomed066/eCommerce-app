import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Footer, Header } from './components'
import { Container } from 'react-bootstrap'
import { HomePage, ProductPage } from './Pages'

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/" component={HomePage} exact />
					<Route path="/product/:id" component={ProductPage} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
