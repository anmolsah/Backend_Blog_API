import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
  try {
    const mongoURI = process.env["MONGODB_URI"];
    if (!mongoURI) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(mongoURI);
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      process.exit(0);
    });
  } catch (error) {
    throw new Error(`Error connecting to MongoDB: ${error}`);
  }
};

export const disconnectDB = async (): Promise<void> => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    throw new Error(`Error disconnecting from MongoDB: ${error}`);
  }
};
