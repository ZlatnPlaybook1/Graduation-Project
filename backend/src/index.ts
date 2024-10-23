import express from 'express';
import * as dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import registerRouter from './registerWithAuthentication/register.router';
import loginRouter from './login/login.router';
import logoutRouter from "./logout/logout.router";
import dashboardRouter from './dashboard/dashboard.router';
import lab1 from "./labs/cookiesLab/lab1.router";
import lab2 from "./labs/cookiesLab/lab2.router";
import hiddenData from "./labs/sqlInjectionLabs/lab1/hiddenData.router";
import xssPostsRouter from "./labs/xss/xssPosts.router";
import lab3sql from "./labs/sqlInjectionLabs/lab3,4/lab3.router";
const app = express();

app.use(cors())
app.use(morgan('dev')); // morgan: HTTP request logger middleware,
                        // dev: predefined format string that Morgan will use to log requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.use('/api', registerRouter);
app.use('/api', loginRouter);
app.use('/api', dashboardRouter)
app.use('/api', logoutRouter)
app.use('/api', lab1)
app.use('/api', lab2)
app.use('/api',hiddenData )
app.use('/api', xssPostsRouter)
app.use('/api', lab3sql)

dotenv.config()


app.listen(8080, () => {
    console.log('hello on http://localhost:8080')
})
