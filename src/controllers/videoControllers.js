import connect from "../../db.js";


import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op, where } from "sequelize";

// tạo object model đại diện cho tất car model của orm
const model = initModels(sequelize);

const getVideos = async (req, res) => {
    try {
        let page = 1;
        let size = 4;
        let index = (page -1 ) * size;
        let data = await model.video.findAll({
            offset: index,
            limit: size
        });
        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ message: "error for api get videos" })
    }
};

const getTypesVideo = async (req, res) => {
    try {
        let data = await model.video_type.findAll();
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: "error get API list types video" })

    }
}

const getVideosTypeId = async (req, res) => {
    try {
        let { typeId } = req.params
        let data = await model.video.findAll({
            where: {
                type_id: typeId
            }
        })
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: "error get API videos by TypeID" })
    }
}

const getVideoDetails = async (req, res) => {
    try {
        let { videoId } = req.params
        let data = await model.video.findOne({
            where: {
                video_id: videoId

            },
            include: [
                {
                    model: model.users,
                    as: 'user'
                }
            ]
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: "error API get video detail by videoId" })
    }
}

export {
    getVideos,
    getTypesVideo,
    getVideosTypeId,
    getVideoDetails,
}