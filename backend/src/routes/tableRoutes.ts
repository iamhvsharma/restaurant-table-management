import { Router } from "express";

const router = Router();

router.get("/", getAllTablesHandler);
router.get("/:id", getTableById);
router.post("/", createTableHandler);
router.patch("/:id", updateTableHandler);
router.delete("/:id", deleteTableHandler);


export default router;