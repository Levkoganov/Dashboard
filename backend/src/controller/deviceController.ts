import { Request, Response } from "express";
import device_sh from "../models/device_sh";

const getAllDevices = async (req: Request, res: Response) => {
  console.log("here");
  try {
    const devices = await device_sh.find();
    return res.status(200).json(devices);
  } catch (err) {
    console.error(`Error fetching data: ${err}`);
    return res.status(400).json({ message: `Something went wrong:${err}` });
  }
};

const createDevice = async (req: Request, res: Response) => {
  const { deviceName, serialNumber } = req.body;

  if (!deviceName || !serialNumber) {
    return res.status(200).json({
      message:
        "Please provide all required parameters: deviceName, serialNumber",
    });
  }

  const newDevice = await device_sh.create({ deviceName, serialNumber });
  return res.status(201).json(newDevice);
};

const updateDevice = async (req: Request, res: Response) => {
  const { id, deviceName, serialNumber } = req.body;
  const update = { deviceName, serialNumber };
  const options = { new: true };

  try {
    const device = await device_sh.findByIdAndUpdate(id, update, options);
    return res.status(200).json(device);
  } catch (err) {
    console.error(`Error update device: ${err}`);
    return res.status(400).json({ message: `Something went wrong:${err}` });
  }
};

const deleteDevice = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const device = await device_sh.findByIdAndDelete(id);
    return res.status(200).json(device);
  } catch (err) {
    console.error(`Error deleting device: ${err}`);
    return res.status(400).json({ message: `Something went wrong:${err}` });
  }
};

export { createDevice, deleteDevice, getAllDevices, updateDevice };
