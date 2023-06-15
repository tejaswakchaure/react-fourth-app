import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

async function addRegi(req ,res){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("Registration");
    const myCollection = db.collection("registrationData");

    let regiData = {
        username : req.query.username,
        password : req.query.password,
        email : req.query.email,
        mobileNo : req.query.mobileNo,
       
    }
    await myCollection.insertOne({regiData});

    await client.close()
    res.json({status : "Add succesfully"});
}

async function readData(){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("Registration");
    const myCollection = db.collection("registrationData");

    let list = await myCollection.find().toArray();

    await client.close()
    res.json(list);

}




app.get("/add",addRegi);
app.get("/read",readData);


app.listen(4000);