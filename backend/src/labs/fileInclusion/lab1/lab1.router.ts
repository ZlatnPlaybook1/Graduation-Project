
import {Router} from 'express';
import {getImage} from './lab1.controller';

const lab1fileInclusion = Router();

lab1fileInclusion.get('/fileInclusionLab1/:id', getImage);

export default lab1fileInclusion;