import connect from "../../db.js";

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

export {
    getUers, 
    createUser,
    getUserDb,
    createUserDb,
}