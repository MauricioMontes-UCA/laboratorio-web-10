import { Router } from "express"
import { userController } from "../controllers/user.controller.js";
import authenticateToken from "../middlewares/auth.middlewares.js";
import { userValidator } from "../validators/user.validator.js";

const userRouter = Router();

userRouter.get("/", userController.getUsers)
userRouter.get("/:id", userController.getUserById)
userRouter.post("/", userValidator.validateRegister(), userController.createUser)
userRouter.put("/:id", authenticateToken, userController.updateUser)
userRouter.delete("/:id", authenticateToken, userController.deleteUser)

export default userRouter;