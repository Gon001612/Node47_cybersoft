import userRotues from "./userRoutes.js";
import express from "express"
import videoRoutes from "./videoRoutes.js";
// define onject rootRoutes
const rootRoutes = express.Router();

// import userRotues vao rootRRouters
rootRoutes.use("/user", userRotues)

rootRoutes.use("/video", videoRoutes)

export default rootRoutes