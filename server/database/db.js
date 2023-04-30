import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-wfrdy4o-shard-00-00.aalykxb.mongodb.net:27017,ac-wfrdy4o-shard-00-01.aalykxb.mongodb.net:27017,ac-wfrdy4o-shard-00-02.aalykxb.mongodb.net:27017/?ssl=true&replicaSet=atlas-q855ku-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
