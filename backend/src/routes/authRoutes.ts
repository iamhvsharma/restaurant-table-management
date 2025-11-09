import { Router } from "Express"
import { signupHandler, loginHandler } from "../controllers/authController";

const router = Router()

router.post("/signup", signupHandler);

router.post("/login", loginHandler);

export default router;