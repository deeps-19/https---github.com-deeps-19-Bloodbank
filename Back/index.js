const express = require('express');
const coonectdb= require('./utils/DBUtils')
//  const userdb= require('./Server/Database/connectiondb')
const userschem = require('./module/Patient.js');
const userModel = require('./module/bloodreq');
let bcrypt=require('bcryptjs');
// onst axios = require('axios')
const app=express();
const bodyparser =require('body-parser');
// const path = require('path');
const cors = require('cors');
// const { log } = require('console');
// const jwt = require('jsonwebtoken');
// const jwt_token= "sdgjggefyt877gwvhgdhuags{}[]]dhuiyreyiuhfjsklAf"
app.use(cors({
    origin :"*"
    

}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({extended:true}));
app.listen(5000,()=>{
    console.log("server is runningb")
});

app.post('/api/creater',async(req,res)=>{
   
   
    try{
        let key = await bcrypt.genSalt();
        let changedPassword= await bcrypt.hash(req.body.Password, key);
       
        let new_user = await userschem({
           
            Name:req.body.Name,
            Lname:req.body.Lname,
            Username:req.body.Username,
            Password:changedPassword,
            Age:req.body.Age,
            Bloodgroup:req.body.Bloodgroup,
            Deasise:req.body.Deasise,
            Doctor:req.body.Doctor,
            Address:req.body.Address,
            Mobile:req.body.Mobile
        });
         
        console.log(new_user)
        new_user.save();
        //  res.json(new_user);
    }
    catch(error)
    {
       res.sendStatus(error)
    }
})

// app.get('/api/uers',async (request,response)=>{
//         try{
//             //fetch data from database
//             let data= await userschem.find();
    
//             response.json(data);
//         }
//         catch(error)
//         {
//             response.sendStatus(400).send(error);
//         }
//     })

    // app.get('/api/user/:id',async (request,response)=>{
    //     try{
    //         //fetch data from database
    //         let data= await userschem.find(request.params.id);
    
    //         response.json(data);
    //     }
    //     catch(error)
    //     {
    //         response.sendStatus(400).send(error);
    //     }
    // })

    app.get('/view/:id', async (request,response)=>{
            try{
                let data = await userschem.findById(request.params.id); 
                if(data!=null)
                    {
                        response.json(data);
                    }
                    else
                    {
                        response.status(404).send("data not found")
        
                    }
            }
            catch(error)
            {
                response.send(error)
            }
        })
        
  
app.post('/api/update/:id',async(req,res)=>{
    try{
        let data = await userschem.findByIdAndUpdate(req.params.id,req.body);
        if(data != null)
        {
            res.json(data);
        }
        else
        {
            res.send("User not found")
        }
    }
    catch(error){
        res.send({message:error.massage})
    }
})

app.delete("/api/delete/:id", async(req,res)=>{
        try{
            let user = await userschem.findByIdAndDelete(req.params.id);
            if(user== null)
            {
                res.send ("Not fond & deleted")
            }
            else
            {
                res.json(user)
            }
        }
        catch(error){
            res.send(error)
        }
    })







    // app.post('/adduser', async(req, res)=>{
    //     try{
    //         let key = await bcrypt.genSalt(); //generating the salt
    //         let changedPassword= await bcrypt.hash(req.body.password, key); //encrypting the password
    //         let newuser = await userModel({userid: req.body.userid, password:changedPassword});
    //         newuser.save();
    //         res.json(newuser);
    //     }
    //     catch(error){
    //         {message: error.message}
    //     } })
        
        app.post('/user', async(req, res)=> {
            
            let newuser =await userschem.findOne({Username:req.body.Username});
            try{
                if(newuser!= null){
                    if(await bcrypt.compare(req.body.password, newuser.password )) {
                       const token = jwt.sign({},jwt_token)
                       console.log(token)
                        res.send("login succesfully");
                    }
                    else{
                        res.send("try again");
                    }
                } }
            catch(error){ {message: error.message} }
        })







// ---------->     Blood Request    <-------------
app.post('/api/paientrequest',async(req,res)=>{
   
   
    try{
        
       
        let bloodreq = await userModel(req.body);
         
        console.log(bloodreq)
        bloodreq.save();
         res.json(bloodreq);
    }
    catch(error)
    {
       res.sendStatus(error)
    }
})

app.get('/api/uers',async (request,response)=>{
    try{
        //fetch data from database
        let data= await userModel.find();

        response.json(data);
    }
    catch(error)
    {
        response.sendStatus(400).send(error);
    }
})
