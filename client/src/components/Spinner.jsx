import React from 'react'
import { Spinner as Spin } from 'react-bootstrap'

const Spinner = () => {
	return (
		<div className="spinner">
			<Spin animation="grow" variant="dark" />
		</div>
	)
}

export default Spinner
