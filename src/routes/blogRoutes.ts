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

/**
 * @openapi
 * /api/blogs:
 *   get:
 *     summary: List all blogs
 *     tags:
 *       - Blogs
 *     responses:
 *       200:
 *         description: List of all blogs
 */
router.get("/", listBlogs);
/**
 * @openapi
 * /api/blogs/{id}:
 *   get:
 *     summary: Get a blog by ID
 *     tags:
 *       - Blogs
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the blog to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog found
 *       404:
 *         description: Blog not found
 */
router.get("/:id", getBlog);
/**
 * @openapi
 * /api/blogs:
 *   post:
 *     summary: Create a new blog
 *     tags:
 *       - Blogs
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Blog created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", requireAuth, upload.single("image"),createBlog);
/**
 * @openapi
 * /api/blogs/{id}:
 *   put:
 *     summary: Update a blog by ID
 *     tags:
 *       - Blogs
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the blog to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *       401:   
 *         description: Bad request
 *       403:
 *         description: Forbidden
 */
router.put("/:id", requireAuth, upload.single("image"), updateBlog);

export default router;
