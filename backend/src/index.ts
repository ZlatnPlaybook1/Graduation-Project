// the starting point of the project

import app from './server'
import * as dotenv from 'dotenv'

dotenv.config() //  Loads environment variables from a .env file into process.env


app.listen(8080, () => {
    console.log('hello on http://localhost:8080')
})
