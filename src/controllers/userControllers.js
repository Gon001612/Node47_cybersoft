import connect from "../../db.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op} from "sequelize";

// tạo object model đại diện cho tất car model của orm
const model = initModels(sequelize);

const getUers = (req,res) => {
    res.status(200).json({message:"get-users"});
}

const createUser = (req,res) => {
    let body = req.body;
    res.send(body)
};

const getUserDb = async (req,res) => {
    const [data] = await connect.query(`
        select * from users
        `)
        res.send(data)
}; 

const createUserDb = (req,res) => {
    const query = `
        insert into users(full_name,email,pass,pass_word) values
        (?,?,?,?)
    `;
    let body = req.body;
    let {full_name,email,pass_word} = body;
    const [data] = connect.execute(query, [full_name,email,pass_word])
    return res.send(data)
};

const getUserOrm = async(req,res) => {
    try {
        let data = await model.users.findAll({
            where: {
                full_name: {
                    [Op.like]: `%John%`
                }

            },
            attributes: ['user_id', 'full_name', 'email'],
            include: [
                {
                    model: model.video, // join voi table video
                    as: 'videos'
                }
            ]
        });
        res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({message: "error from ORM"})
    }
}

const getUserOrmById = async(req,res) => {
    try {
        let {id} = req.params;
        let data = await model.users.findOne({
            where:{
                user_id: id
            }
        })
        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json({message:"error API get user by Id"})
    }
}

const createUserOrm = async(req,res) => {
    try {
        let { full_name, email} = req.body;
        await model.users.create({
          
            full_name,
            email
        });
        return res.status(201).json({message:"Create user succefully"})
    } catch (error) {
        return res.status(500).json({message:"error API create user orm "})
        
    }
}

export {
    getUers, 
    createUser,
    getUserDb,
    createUserDb,
    getUserOrm,
    getUserOrmById,
    createUserOrm,
}