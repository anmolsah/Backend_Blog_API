import { Router } from "express";
import {
  createBlog,
  listBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blogControllers";
import requireAuth from "../middlewares/auth";
import { upload } from "../utils/uploader";

const router = Router();

router.get("/", listBlogs);
router.get("/:id", getBlog);
router.post("/", requireAuth, createBlog);
router.put("/:id", requireAuth, upload.single("image"), updateBlog);

export default router;
