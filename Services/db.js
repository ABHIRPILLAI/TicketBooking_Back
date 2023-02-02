const mongoose=require('mongoose');



//2----State connection string via mongoose

mongoose.connect('mongodb://localhost:27017/Netflix',{

    useNewUrlParser:true  //to avoid unwanted warning

});

const User=mongoose.model('User',{
    //schema creation ie table header

    email:String,
    password:String,
    username:String,
    Ticket_Details:[],
    Date:[],
    Time:[],
    Seat:[],
    Amount:[]

});
const Rent=mongoose.model('Rent',{
    //schema creation ie table header

    email:String,
    password:String,
    username:String,
    

});
module.exports={
    User,Rent
}