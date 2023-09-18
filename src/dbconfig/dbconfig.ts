import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection=mongoose.connection;
        connection.on('connected',()=>{"ok"})
        
    } catch (error) {
        console.log("something went wrong")
        console.log(error)
    }
}