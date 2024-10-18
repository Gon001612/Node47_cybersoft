import express from 'express';
import connect from './db.js';
import rootRoutes from './src/routers/rootRoutes.js';
import { createUser, createUserDb, getUserDb } from './src/controllers/userControllers.js';
import cors from "cors";




const app = express();

// thêm middleware cors để nhận req từ FE hoặc bên khác 
app.use(cors());

// thêm middleware để convert string về json với api post và put
app.use(express.json());

// import rootRoutes vao index.js
app.use(rootRoutes);

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

// define API get list users

app.post("/create-user", createUser)

app.get("/get-user-db", getUserDb)

app.post("/create-user-db", createUserDb)

app.listen(8080, () => {
    console.log("BE Starting with port 8080")
})