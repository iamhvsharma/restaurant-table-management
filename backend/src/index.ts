import dotenv from "dotenv";
import connectDB from "./db/db";
import { app } from "./app";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
dotenv.config();

connectDB()
  .then(() => {
    app.use(
      (
        err: ErrorRequestHandler,
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        console.log("ERR: ", err);
        res.status(500).send("Something broke!");
      }
    );

    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running at PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB Connection failed!!! `, err);
  });
