import {Blog} from '../models/blog.modal.js'
import mongoose from 'mongoose';

export const addBlog = async (req,res) => {
    const {name, description, image} = req.body;

    try {
        if(!name || !description || !image){
            return res.status(400).json({success:false, message:"Please provide all fields"});
        }
        
        const newBlog = new Blog({
            name,
            description,
            image
        })

        await newBlog.save();

        res.status(201).json({success: true, data: newBlog});
    } catch (error) {
        console.error("Error in Blog creation: ", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const deleteBlog = async (req,res) => {
    const {id} = req.params;
    try {
        await Blog.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted"})
    } catch (error) {
        res.status(404).json({success:false, message:"Product not found"})
    }
}

export const updateBlog = async (req,res) => {

    const {id} = req.params;

    const blog = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"});
    }

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, blog, {new:true});
        res.status(200).json({success:true, data:updatedBlog});
    } catch (error) {
        res.status(500).json({success:false,message:"Server Error"});
    }
}

export const allBlog = async (req,res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).json({success:true,data:blogs});
    } catch (error) {
        console.log("Error in fetching product: ", error.message);
        res.status(500).json({sccess: false, message: "Server Error"});
    }
}