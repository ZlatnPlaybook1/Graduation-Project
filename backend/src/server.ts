import express from 'express';
import registerRouter from './registerWithAuthentication/register.router';
import loginRouter from './login/login.router';
import dashboardRouter from './dashBoard/dashboard.router';
import morgan from 'morgan';
import cors from 'cors'
import {isAuthenticated} from "./modules/auth";


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
app.use('/api', isAuthenticated, loginRouter);
app.use('/api', isAuthenticated, dashboardRouter)


export default app