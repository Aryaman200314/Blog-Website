import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog.j7ykz.mongodb.net/?retryWrites=true&w=majority&appName=Blog`
    try {
        await mongoose.connect(URL);
        console.log("Successfully connected to database");
    }
    catch (error) {
        console.log("Error connecting to DB", error.message);
        
    }
}

export default Connection;