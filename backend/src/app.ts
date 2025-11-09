import express from "express";
import cors from "cors";

// Routes Import
import authRoutes from "./routes/authRoutes";

const app = express();

// Calling Necessary Middlewares
app.use(express.json());
app.use(cors());

// API ROUTES
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).send({
    msg: "Home page",
  });
});

export { app };
