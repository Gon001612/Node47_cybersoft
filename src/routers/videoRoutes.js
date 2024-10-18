import express from "express";
import { getTypesVideo, getVideos, getVideosTypeId, getVideoDetails } from "../controllers/videoControllers.js";
import video from "../models/video.js";



const videoRoutes = express.Router();

// difine API get list video
videoRoutes.get("/get-videos", getVideos)

// define API get type video
videoRoutes.get("/get-types-video", getTypesVideo)

// define API get list video by type
videoRoutes.get("/get-videos/:typeId", getVideosTypeId);

// define API get video details by video_id
videoRoutes.get("/get-video/:videoId", getVideoDetails)

export default videoRoutes;