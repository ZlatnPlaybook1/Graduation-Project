import e, {Router} from 'express';
import { getAccounts,getAccount,transfer  } from './lab3.controller';

const lab3IDORSRouter = Router();

lab3IDORSRouter.get('/accounts', getAccounts);
lab3IDORSRouter.get('/account/:id', getAccount);
lab3IDORSRouter.post('/transfer', transfer);

export default lab3IDORSRouter;