import mongoose, { Mongoose } from "mongoose";

export const connect = async (): Promise<Mongoose> => {
  return await mongoose.connect('')
}

mongoose.connection.on("connected", () => {
  console.log(`Connected to the database!`);
});

