import {Router} from 'express';
import {displayCountries} from './lab7controller';

let lab7xss = Router();
lab7xss.get('/countries', displayCountries);

export default lab7xss;