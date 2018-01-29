import express from 'express';
// Controller imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

// basic routes
routes.get('/', basicController.get);

// user routes
routes.post('/signup', userController.post);

// zpost routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

// comment routes
routes.post('/comment', commentController.post);

export default routes;
