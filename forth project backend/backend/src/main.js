import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

async function addTodo(req ,res){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("TODO");
    const myCollection = db.collection("todoInfo");

    let todoData = {
        task : req.query.task ,
        description:req.query.description,
    }
    await myCollection.insertOne({todoData});

    await client.close()
    res.json({status : "Add succesfully"});
}




app.get("/add",addTodo);


app.listen(4000);