const User = require('../models/user.models')

const bycrypt = require('bcryptjs');

// get all users from the database
const getAllUsers = async  (req,res) => {

    let allUsers;
    try{
        allUsers = await User.find()
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }

    res.status(200).json(allUsers)
}


// register users to the database
const signup = async (req,res) => {
    // we are collecting username & password from the client

    const  {username,password} = req.body

    // lets check if the username is taken
    let existingUser;

    try{
       existingUser = await User.findOne({username})
   }
   catch(err){
    console.log(err)
   }

   if(existingUser){
    res.status(400).json({message:"Username Already Taken"})
   }
    // lets encrypt the user password using bycryptjs 
    const hashedPassword = bycrypt.hashSync(password)

    const newUser = new User(
        {username,password:hashedPassword}
    ) 

    try{
        await  newUser.save()

    }
    catch(err){
        console.log(err)
    }
    res.json("User Saved!")
}

// login

const login = async (req,res) => {
    // get username and pasword from client
    const {username,password} = req.body;
    
    // check if user exists
   let existingUser;

   try{
     existingUser = await User.findOne({username})
   }
   catch(err){
     res.status(404).json("error:" + err)
   }

if(!existingUser){res.status(404).json("User Not Found!")}

// compare password (sync)

const isPasswordCorrect = bycrypt.compareSync(password,existingUser.password)

if(!isPasswordCorrect)return res.status(400).json("Incorrect Password!")

return res.status(200).json(existingUser._id)
}




module.exports = {getUsers:getAllUsers,signup:signup,login:login}
