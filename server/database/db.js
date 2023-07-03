import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://sumit:8167529759@cluster0.iihmkj2.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;