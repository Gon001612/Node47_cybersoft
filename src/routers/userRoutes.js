import express from "express"
import { createUser, getUers, getUserDb, getUserOrm,getUserOrmById,createUserOrm  } from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/get-users" , getUers);
userRoutes.get("/create-user", createUser);
userRoutes.get("/get-user-db", getUserDb);
userRoutes.get("/get-users-orm", getUserOrm);
userRoutes.get('/get-users-orm/:id', getUserOrmById);
userRoutes.post('/create-user-orm', createUserOrm)

export default userRoutes;