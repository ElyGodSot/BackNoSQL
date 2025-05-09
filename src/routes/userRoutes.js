import express from 'express'
import { getAllUsers, createUser } from '../controllers/userController'
import { getAllPosts, createPost } from '../controllers/postController';

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/post').get(getAllPosts).post(createPost);
export default router;