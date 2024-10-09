import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IDeviceInput } from "../utils/types";

export const fetchAllDevices = createAsyncThunk(
  "devices/fetchAllDevices",
  async () => {
    const { data } = await axios.get("device");
    return data;
  }
);

export const createDevice = createAsyncThunk(
  "devices/createDevice",
  async (payload: IDeviceInput) => {
    const { data } = await axios.post("device/create", payload);
    return data;
  }
);

export const updateDevice = createAsyncThunk(
  "devices/updateDevice",
  async (payload: IDeviceInput) => {
    const { data } = await axios.put("device/update", payload);
    return data;
  }
);

export const deleteDevice = createAsyncThunk(
  "devices/deleteDevice",
  async (id: string) => {
    const { data } = await axios.delete("device/delete", { data: { id: id } });
    return data;
  }
);
