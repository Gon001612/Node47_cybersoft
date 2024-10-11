import express from 'express';
import connect from './db.js';


const app = express();

// thêm middleware để convert string về json với api post và put
app.use(express.json());

app.get('/hello-world', (req,res) => {
res.send("hello world");
})



app.get('/get-user/:id/:hoTen', (req,res) => {
    let {id, hoTen} = req.params;
    let {queryString} = req.query;
    let {token, authorization} = req.headers;
    let headers = req.headers;
    res.send({id,hoTen,queryString,token,authorization});
})

app.get('/health-check', (req,res) => {
    res.send("sever is connecting")
})

app.post("/create-user", (req,res) => {
    let body = req.body;
    res.send(body)
})

app.get("/get-user-db", async (req,res) => {
    const [data] = await connect.query(`
        select * from users
        `)
        res.send(data)
})

app.post("/create-user-db", (req,res) => {
    const query = `
        insert into users(full_name,email,pass,pass_word) values
        (?,?,?,?)
    `;
    let body = req.body;
    let {full_name,emailpass_word} = body;
    const [data] = connect.execute(query, [full_name,email,pass_word])
    return res.send(data)
})

app.listen(8080, () => {
    console.log("BE Starting with port 8080")
})