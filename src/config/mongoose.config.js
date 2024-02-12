import mongoose from "mongoose";

export const connectUsingMongoose = async () => {

    try {

        await mongoose.connect("mongodb+srv://sparshsaxena9654:sparsh@cluster0.fzvpkhn.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Using Moongose');
        
    } catch (error) {
        console.log(error);
    }

}