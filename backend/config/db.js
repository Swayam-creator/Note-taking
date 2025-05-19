import mongoose from 'mongoose';
 const connectDb = async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Database connected successfully")).catch((err)=>{
      console.log('Error' + err);
     });
     
   } catch (error) {
    console.log(error);
    process.exit(1);
   }
    
}
export default connectDb;