import userRotues from "./userRoutes.js";
import express from "express"
// define onject rootRoutes
const rootRoutes = express.Router();

// import userRotues vao rootRRouters
rootRoutes.use("/user", userRotues)

export default rootRoutes