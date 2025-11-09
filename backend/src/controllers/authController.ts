import { Request, Response } from "express";
import { signupSchema } from "../zodSchemas/authSchemas";
import { User } from "../models/auth.model";
import bcrypt from "bcrypt";

export const signupHandler = async (req: Request, res: Response) => {
  try {
    const result = signupSchema.safeParse(req.body);

    if (!result.success || !result.data) {
      res.status(400).send({
        msg: "Input validation failed",
        error: result.error,
      });

      return;
    }

    const { name, email, password } = result.data;

    // Check if user exists
    const existingUser = await User.findOne({
      email: email,
    });

    if (existingUser) {
      res.status(409).send({
        msg: "User already exists with the given email",
      });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.insertOne({
      name: name,
      email: email,
      password: hashedPassword,
    });

    if (!user) {
      res.status(401).send({
        msg: "Signup failed, Please try again later",
      });
    }

    res.status(201).send({
      msg: "Signup Successful, Welcome",
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).send({
      msg: "Internal Server error",
      error: error,
    });
  }
};

export const loginHandler = (req: Request, res: Response) => {};
