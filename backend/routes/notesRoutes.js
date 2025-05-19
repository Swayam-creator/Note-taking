import express from 'express';

import {getAllPost,createPost,updatePost,deletePost, getPostById} from '../controller/notes.controller.js'
const router=express.Router();
router.get("/",getAllPost);
router.get("/:id",getPostById);
router.post("/",createPost);
router.put("/:id",updatePost);
router.delete("/:id",deletePost);
export default router;