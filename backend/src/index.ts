import dotenv from "dotenv";
import connectDB from "./db/db";
import { app } from "./app";
dotenv.config();

connectDB()
  .then(() => {
    app.on('error', (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running at PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB Connection failed!!! `, err);
  });
