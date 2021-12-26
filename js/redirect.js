import { MongoClient } from "mongoose";
const Client = new MongoClient('mongodb+srv://Nuggets:<password>@nuggets.irqty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
try{
    await Client.connect()
}catch(err){
    console.log('Не удалось подключиться к базе данных: ', err)
}

