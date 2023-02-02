const express = require('express');


//dataservice import

const dataService = require('./Services/dataservice')

// import cors

const cors=require('cors')



const { append } = require('express/lib/response');

// ///creating an application for express

const app=express()



//Give command to share data via cors

app.use(cors({
    origin:'http://localhost:4200'
}))


//to parse json from req body

app.use(express.json())//--to veiw data in console







const jwt = require('jsonwebtoken')
//router specific middleware

const jwtMiddleware=(req,res,next)=>{
    console.log('router specific middleware');
    const token = req.headers['x-access-token']

    //verify token
    const data=jwt.verify(token,'Key#23123');
    console.log(data);
    next();

}






app.listen(3000,()=>{
    console.log('listening on port 3000');
})


app.post('/register',(req,res)=>
{   
    console.log(req.body);
      dataService.register(req.body.username,req.body.email,req.body.password)
      .then(result=>{
        res.status(result.statusCode).json(result)
      })


})

app.post('/login',(req,res)=>
{
    console.log(req.body);
 dataService.login(req.body.email,req.body.password)
 .then((result)=>{
    res.status(result.statusCode).json(result)
 })
 })


 app.post('/deposit',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.deposit(req.body.email,req.body.seat,req.body.seattype,req.body.theatre,req.body.amount)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)

 })
   

})
app.post('/deposit2',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.deposit2(req.body.email,req.body.date)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)

 })
   

})
app.post('/deposit3',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.deposit3(req.body.email,req.body.time)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)

 })
   

})
app.post('/deposit4',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.deposit4(req.body.email,req.body.seat)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)

 })
   

})
app.post('/deposit5',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.deposit5(req.body.email,req.body.amount)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)

 })
   

})

app.post('/transaction',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.getTransaction(req.body.email)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)

 })
})
app.post('/transaction2',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.getTransaction2(req.body.email)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)
 })
})
app.post('/transaction3',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.getTransaction3(req.body.email)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)
 })
})
app.post('/transaction4',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.getTransaction4(req.body.email)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)
 })
})
app.post('/transaction5',jwtMiddleware,(req,res)=>
{
    console.log(req.body);
dataService.getTransaction5(req.body.email)//to access dataservice in index page ie,first
.then(result=>{
    res.status(result.statusCode).json(result)//so we add staus etc on dataservice so display like that in json format so res.json(result)
 })
})

