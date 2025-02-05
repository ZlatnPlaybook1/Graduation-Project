
import {Router} from 'express';
import {cityPage} from './lab2.controller';

const lab2fileInclusion = Router();

lab2fileInclusion.get('/fileInclusionLab2', cityPage);

export default lab2fileInclusion;