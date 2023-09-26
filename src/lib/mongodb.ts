import mongoose from "mongoose";
export default async function mongoDBConnect() {
  try {
    let uri: string;

    if (process.env.MONGODB_URI) {
      uri = process.env.MONGODB_URI;
    } else {
      throw new Error("MONGODB_URI environment variable is not set");
    }

    await mongoose.connect(uri);
    console.log("Connection Successful");
  } catch (error) {
    console.log(error);
  }
}
