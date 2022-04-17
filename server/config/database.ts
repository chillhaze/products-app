import config from "config";
import { ConnectOptions, connect } from "mongoose";

type ConnectionOptionsExtend = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};

const connectDB = async () => {
  try {
    const mongoURI: string = config.get("mongoURI");
    const options: ConnectOptions & ConnectionOptionsExtend = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options);
    // tslint:disable-next-line:no-console
    console.log("MongoDB Connected...");
  } catch (err) {
    // tslint:disable-next-line:no-console
    let errorMessage = "Failed to do something exceptional";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    console.error(errorMessage);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
