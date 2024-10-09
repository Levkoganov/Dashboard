import { Schema, model } from "mongoose";
import { IDevice } from "../../types";

const deviceSchema = new Schema<IDevice>(
  {
    deviceName: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IDevice>("Devices", deviceSchema);
