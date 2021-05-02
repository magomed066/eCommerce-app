import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import bodyParser from 'body-parser'
import colors from 'colors'
import productRouters from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req, res) => {
	res.send('API is running')
})

app.use('/api', productRouters)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode, on port: ${PORT}`
			.yellow.bold,
	),
)
