import express from 'express'
import { getAllUsers, createUser } from '../controllers/userController.js'
import { getAllPosts, createPost } from '../controllers/postController.js';

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/post').post(protect,createPost).get()
//INCOMPLETO
export default router;