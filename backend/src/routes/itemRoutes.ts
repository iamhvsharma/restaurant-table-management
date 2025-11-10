import { Router } from "express";

const router = Router();

import {
  getAllItemsHandler,
  getItembyIdHandler,
  createItemHandler,
  updateItemHandler,
  deleteItemHandler,
} from "../controllers/itemController";

// GET-ALL, GETBYID, POST, PATCH, DELETE

router.get("/", getAllItemsHandler);
router.get("/:id", getItembyIdHandler);
router.post("/", createItemHandler);
router.patch("/:id", updateItemHandler);
router.delete("/:id", deleteItemHandler);

export default router;
