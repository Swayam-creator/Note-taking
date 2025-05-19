import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import dotenv from 'dotenv';
import path from 'path';
import  connectDb  from './config/db.js';
import rateLimiter from './middlewares/rateLimiter.js';
import cors from 'cors';
dotenv.config();
const app=express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

if(process.env.NODE_ENV !== "production"){
    const options={
        origin:"http://localhost:5173",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeader:['Content-type','Authorization']
    }
    app.use(cors(options));
}
app.use(express.json());
app.use(rateLimiter);
app.use('/api/notes',notesRoutes);
app.use(express.urlencoded({extended:true}));
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
}

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started listening on http://localhost:${PORT}`);
    })
}).catch((err)=>{
    console.log("Error"+err);
});

