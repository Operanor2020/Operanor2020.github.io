const Client = new MongoClient('mongodb+srv://Nuggets:<password>@nuggets.irqty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
try{

}catch(err){
    console.log('Не удалось подключиться к базе данных: ', err)
}

