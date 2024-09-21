import express from 'express';
import * as dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors'
import registerRouter from './registerWithAuthentication/register.router';
import loginRouter from './login/login.router';
import dashboardRouter from './dashboard/dashboard.router';

const app = express();

app.use(cors())
app.use(morgan('dev')); // morgan: HTTP request logger middleware,
                        // dev: predefined format string that Morgan will use to log requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res, next) => {
    res.status(200).json({'data': "welcome to home page"})
})
app.get('/api', (req, res) => {
    res.status(200).json({'data': "api"})
})
app.use('/api', registerRouter);
app.use('/api', loginRouter);
app.use('/api', dashboardRouter)


dotenv.config()


app.listen(8080, () => {
    console.log('hello on http://localhost:8080')
})
