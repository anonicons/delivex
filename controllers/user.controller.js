const User = require('../models/user.models')

const bycrypt = require('bcryptjs');
// const Blog = require('../models/blog.models');

const getAllUsers = async  (req,res) => {
    await User.find()
     .then(data => res.json(data))
     .catch(err => res.status(400).json("Error" + err))
}



const signup = async (req,res) => {
    const  {username,password} = req.body

    // lets check if the email and the username is taken
    let existingUserWEmail;
    

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

const login = async (req,res) => {
    const {username,password} = req.body;
    
    // check if user exists
   let existingUser;

   try{
    existingUser = await User.findOne({username})
   }
   catch(err){
  res.status(404).json("error:" + err)
   }

if(!existingUser)return res.status(404).json("User Not Found! Please Signup")

// check password

const isPasswordCorrect = bycrypt.compareSync(password,existingUser.password)

if(!isPasswordCorrect)return res.status(400).json("Incorrect Password!")

return res.status(200).json(existingUser._id)
}




module.exports = {getUsers:getAllUsers,signup:signup,login:login}
