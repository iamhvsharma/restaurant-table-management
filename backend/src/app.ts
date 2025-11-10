import express from "express";
import cors from "cors";

// Routes Import
import authRoutes from "./routes/authRoutes";
import tableRoutes from "./routes/tableRoutes"

const app = express();

// Calling Necessary Middlewares
app.use(express.json());
app.use(cors());

// API ROUTES
app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/tables", tableRoutes);

app.get("/health", (req, res) => {
  res.status(200).send({
    msg: "Health page",
  });
});

export { app };
