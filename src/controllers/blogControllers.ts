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