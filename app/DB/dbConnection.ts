import mongoose from 'mongoose';

let isConnected = false;

const connectionToDB = async () => {
  if (isConnected) {
    console.log("DB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL as string, {
      dbName: "domain-dash",
    });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

export default connectionToDB;