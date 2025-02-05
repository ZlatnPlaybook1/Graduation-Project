
import {Router} from 'express';
import {cityPage} from './lab3.controller';

const lab3fileInclusion = Router();

lab3fileInclusion.get('/fileInclusionLab3', cityPage);

export default lab3fileInclusion;