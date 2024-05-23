import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup=async (req,res)=>{
     const { username, email, password } = req.body
     if(!username || !email || !password){
        return res.status(400).json({message:'all filed are requried'})
     }
     const hashpassword=bcryptjs.hashSync(password,10)
     
     const newUser=new User({
        username,
        email,
        hashpassword,
     })

     try{
     await newUser.save()
     res.json('signup successfully')
     }
     catch{
        res.status(500).json({message: error.message})
     }
}