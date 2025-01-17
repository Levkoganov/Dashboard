import { connect } from "mongoose";

export default async (url: string) => {
  try {
    await connect(url);
    console.log(`Connected to: ${url}`);
  } catch (err) {
    console.log(`Failed to connect: ${url},\n ${err}`);
  }
};
