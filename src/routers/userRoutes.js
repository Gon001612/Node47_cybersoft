import express from "express"
import { getUers } from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/get-users" , getUers);
// userRoutes.get("/create-user", createUser);
// userRoutes.get("/get-user-db", getUserDb);
// userRoutes.get("/get-user-orm", getUserOrm);

export default userRoutes;