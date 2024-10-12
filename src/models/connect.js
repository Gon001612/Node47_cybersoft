import {Sequelize} from "sequelize"

// tao object sequelize tới database
const sequelize = new Sequelize(
    "node47_youtube_mini",
    "root",
    "123456",
    {
        host: "localhost",
        port: 3307,
        dialect: "mysql"
        
    }
)

export default sequelize