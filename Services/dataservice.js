const res = require('express/lib/response');
const jwt= require('jsonwebtoken');




const db=require('./db');

const  register=(username,email,password)=>{
   
    return db.User.findOne({email})
    .then(user=>{//then to synchronize between ports
      if(user){
        return{
          status:false,
          statusCode:400,
          message:'User already registeredd'
        }
  
      }
      else
      {
        const newUser = new db.User({
      
          username:username,
          email:email,
          password:password,
          
        })
        newUser.save()//data saved in mogodb
        return{
          status:true,
          statusCode:200,
          message:'User  registration successful'
        }
      
     
  
   
    }})}

const  login=(email,pswd)=>{

    // let userDetails=this.userDetail

  //   if (acno in userDetails) {
    return db.User.findOne({email,password:pswd})
    .then(user=>{
      if (user) {
        currentUser=user.username//assign username to the variable
        currentEmail=email
        const token =jwt.sign({currentEmail:email},'Key#23123')
        return{
          status:true,
          statusCode:200,
        message:"login successfull",
        token:token,
        currentUser:currentUser,
        currentEmail:currentEmail
        
        } 
      }
      else{
        return{
          status:false,
          statusCode:400,
          message:"Invalid userdetails"
        }
      }
    })
}
const deposit=(email,seat,seattype,theatre,amt)=>{

    
  // let userDetails=this.userDetail
  var amount=parseInt(amt)
  return db.User.findOne({email})
  .then(user=>{
    if (user) {

      user.Ticket_Details.push({//push values to transaction array
        Type:'Seat-Booked',
        Seats:seat,
        seatType:seattype,
        Theatre:theatre,
        amount:amount//the Type name and amount name is refered in *ngFor
      })
     user.save();
      // console.log(userDetails);//to check whether the data is disolaying
     
        return{
          status:true,
          statusCode:200,
        message:`Payement Successfull`
        }
        



    }
    else{
      return{
        status:false,
        statusCode:400,
        message:"Date Fixed"
      }
    }
  })
}
const deposit2=(email,date)=>{

    
  // let userDetails=this.userDetail
  return db.User.findOne({email})
  .then(user=>{
    if (user) {

      user.Date.push({//push values to transaction array
        Type:'Seat-Booked',
        Date:date//the Type name and amount name is refered in *ngFor
      })
     user.save();
      // console.log(userDetails);//to check whether the data is disolaying
     
        return{
          status:true,
          statusCode:200,
        message:`Date and Time Fixed`
        }
    }
    else{
      return{
        status:false,
        statusCode:400,
        message:"Error"
      }
    }
  })
}
const deposit3=(email,time)=>{

    
  // let userDetails=this.userDetail
  return db.User.findOne({email})
  .then(user=>{
    if (user) {

      user.Time.push({//push values to transaction array
        Type:'Time',
        Time:time//the Type name and amount name is refered in *ngFor
      })
     user.save();
      // console.log(userDetails);//to check whether the data is disolaying
     
        return{
          status:true,
          statusCode:200,
        message:`Date and Time Fixed`
        }
    }
    else{
      return{
        status:false,
        statusCode:400,
        message:"Error"
      }
    }
  })
}

const deposit4=(email,seat)=>{

    
  // let userDetails=this.userDetail
  return db.User.findOne({email})
  .then(user=>{
    if (user) {

      user.Seat.push({//push values to transaction array
        Type:'Seat',
        Seat:seat//the Type name and amount name is refered in *ngFor
      })
     user.save();
      // console.log(userDetails);//to check whether the data is disolaying
     
        return{
          status:true,
          statusCode:200,
        message:`Seat added`
        }
    }
    else{
      return{
        status:false,
        statusCode:400,
        message:"Error"
      }
    }
  })
}
const deposit5=(email,amount)=>{

    
  // let userDetails=this.userDetail
  return db.User.findOne({email})
  
  .then(user=>{
    if (user) {

      user.Amount.push({//push values to transaction array
        Type:'Amount',
        Amount:amount//the Type name and amount name is refered in *ngFor
      })
     user.save();
      // console.log(userDetails);//to check whether the data is disolaying
     
        return{
          status:true,
          statusCode:200,
        message:`Amount paid`
        }
    }
    else{
      return{
        status:false,
        statusCode:400,
        message:"Error"
      }
    }
  })
}
const getTransaction=(email)=>{//acno arde ano ayalde acnt details kitnm
  return db.User.findOne({email})
  .then(user=>{
    if (user)
     {
  return {
    status:true,
    statusCode:200,
    // message:"invalid userdetails"
   Booking_Details: user.Ticket_Details


   }
  }
  else{
    return {
      status:false,
      statusCode:400,
      message:"User not Found"
     }
  }
})}

const getTransaction2=(email)=>{//acno arde ano ayalde acnt details kitnm
  return db.User.findOne({email})
  .then(user=>{
    if (user)
     {
  return {
    status:true,
    statusCode:200,
    // message:"invalid userdetails"
   Date: user.Date


   }
  }
})}
  const getTransaction3=(email)=>{//acno arde ano ayalde acnt details kitnm
    return db.User.findOne({email})
    .then(user=>{
      if (user)
       {
    return {
      status:true,
      statusCode:200,
      // message:"invalid userdetails"
      Time: user.Time
     }
    }
  else{
    return {
      status:false,
      statusCode:400,
      message:"User not Found"
     }
  }
})}
const   getTransaction4=(email)=>{//acno arde ano ayalde acnt details kitnm
  return db.User.findOne({email})
  .then(user=>{
    if (user)
     {
  return {
    status:true,
    statusCode:200,
    // message:"invalid userdetails"
    Seat: user.Seat
   }
  }
else{
  return {
    status:false,
    statusCode:400,
    message:"User not Found"
   }
}
})}
const getTransaction5=(email)=>{//acno arde ano ayalde acnt details kitnm
  return db.User.findOne({email})
  .then(user=>{
    if (user)
     {
  return {
    status:true,
    statusCode:200,
    // message:"invalid userdetails"
    Amount: user.Amount
   }
  }
else{
  return {
    status:false,
    statusCode:400,
    message:"User not Found"
   }
}
})}

module.exports={
    login,register,deposit,getTransaction,deposit2,getTransaction2,deposit3,getTransaction3,deposit4,getTransaction4,deposit5,getTransaction5
   }