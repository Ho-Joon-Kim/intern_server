import Router from '@koa/router';

const api = new Router();

import {login} from './api.controller';



api.get('/', login);



export default api