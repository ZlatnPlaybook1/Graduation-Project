import express from 'express';
import registerRouter from './register/RegisterRouter';
import loginRouter from './login/LoginRouter';
import morgan from 'morgan';
import {login} from './login/login';
import cors from 'cors'
import {protect} from "./modules/auth";


const app= express();

app.use(cors())
app.use(morgan('dev')); // morgan: HTTP request logger middleware,
                        // dev: predefined format string that Morgan will use to log requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res, next) => {
    res.status(200).json({'data': "welcome to home page"})
})

app.use('/', registerRouter);
app.use('/', loginRouter);


export default app