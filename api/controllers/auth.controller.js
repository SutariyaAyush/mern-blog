import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

export const signup=async (req,res,next)=>{
     const { username, email, password } = req.body
     if(!username || !email || !password){
        next(errorHandler,('all filed are required'))
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
        next(error)
     }
}