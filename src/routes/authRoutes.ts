import { Router } from "express";
import { register, login } from "../controllers/authControllers";

const router = Router();

/**
 * @openapi
 * /api/auth/reegister:
 *  post:
 *   summary: Register a new user
 *   tags: [Auth]
 *  requestBody:
 *   required: true
 *  content:
 *   application/json:
 *    schema:
 *    type: object
 *    required: [name, email, password]
 *   properties:
 *    name:
 *      type: string
 *    email:
 *      type: string
 *    password:
 *      type: string
 * responses:
 *  201:
 *   description: User created successfully
 * 400:
 *  description: Bad request
 * 409:
 *  description: Email already exists
 */

router.post("/reegister", register);


/** * @openapi
 * /api/auth/login:
 *  post:
 *   summary: Login a user
 *   tags: [Auth]
 *  requestBody:
 *   required: true
 *  content:
 *   application/json:
 *    schema:
 *    type: object
 *    required: [email, password]
 *   properties:
 *    email:
 *      type: string
 *    password:
 *      type: string
 * responses:
 *  200:
 *   description: User logged in successfully
 * 400:
 *  description: Bad request
 * 401:
 *  description: Invalid credentials
 */

router.post("/login", login);

export default router;
