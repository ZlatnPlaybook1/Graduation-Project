import express from 'express';
import router from './router';
import morgan from 'morgan';
import { signin } from './user/user';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(morgan('dev')); // morgan: HTTP request logger middleware,
// dev: predefined format string that Morgan will use to log requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {
    res.json({ 'data': "hello" });
});
app.use('/api', router);
app.post("/signin", signin);
export default app;
//# sourceMappingURL=server.js.map