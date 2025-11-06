import type {Response} from express;
import Blog from "../models/Blog";
import type { AuthRequest } from '../middlewares/auth';


export async function createBlog(req:AuthRequest,res:Response){
    try {
        const {title,content} = req.body as {title:string;content:string};
        if(!title || !content){
            return res.status(400).json({message:"All fields are required"});
        }
       const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;
       const blog = await Blog.create({title,content,imageUrl,author:req.userId});
       return res.status(201).json(blog);
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
        
    }
}


//List Blogs
export async function listBlogs(req:AuthRequest,res:Response){
    try {
        const blogs = await Blog.find().populate("author","name email").sort({createdAt:-1});
        return res.json(blogs);
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
}

//get blog by if
export async function getBlog(req:AuthRequest,res:Response){
    try {
        const {id} =req.params as {id:string};
        const blog = await Blog.findById(id).populate("author","name email");
        if(!blog){
            return res.status(404).json({message:"Blog not found"});
        }
        return res.json(blog);
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
        
    }
}