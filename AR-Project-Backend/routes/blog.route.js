import express from 'express'
import { addBlog, deleteBlog, allBlog, updateBlog } from "../controllers/blog.controller.js";


const  router = express.Router();

router.post("/add", addBlog);

router.delete("/delete/:id", deleteBlog);

router.put("/update/:id", updateBlog);

router.get("/", allBlog);

export default router;