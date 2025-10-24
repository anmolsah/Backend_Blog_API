import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

//Register a new uer
export async function register(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body as {
      name: string;
      email: string;
      password: string;
    };

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  } catch (error) {}
}

//login a user
