import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config()
mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("mongo is connected")
    })
    .catch((err)=>{
        console.log(err)
    })

const app=express()


app.listen(3000,()=>{
    console.log('sever runing on 3000 port')
})
app.use(express.json)
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode||500;
    const message=err.message||'internal server error'
    res.status(statuscode).json({
        statuscode,
        message
    })
})