import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import dotenv from 'dotenv';
import  connectDb  from './config/db.js';
import rateLimiter from './middlewares/rateLimiter.js';
import cors from 'cors';
dotenv.config();
const app=express();
const PORT = process.env.PORT;
connectDb().then(()=>{

    app.listen(PORT,()=>{
        console.log(`Server started listening on http://localhost:${PORT}`);
    })
}).catch((err)=>{
    console.log("Error"+err);
});
const options={
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeader:['Content-type','Authorization']
}
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(rateLimiter);
app.use('/api/notes',notesRoutes);