import { createSlice } from "@reduxjs/toolkit";
import {
  createDevice,
  deleteDevice,
  fetchAllDevices,
  updateDevice,
} from "../api/fetchDevices";
import { IDevices } from "../utils/types";

interface IState {
  devices: IDevices[];
  isLoading: boolean;
}

const initialState: IState = {
  devices: [],
  isLoading: false,
};

export const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Fetch all devices
    builder.addCase(fetchAllDevices.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllDevices.fulfilled, (state, action) => {
      state.devices = action.payload;
      state.isLoading = false;
    });

    // Create new device
    builder.addCase(createDevice.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createDevice.fulfilled, (state, action) => {
      state.devices = [...state.devices, action.payload];
      state.isLoading = false;
    });

    // Update device
    builder.addCase(updateDevice.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateDevice.fulfilled, (state, action) => {
      const index = state.devices.findIndex((device) => device._id === action.payload._id);
      if (index !== -1) state.devices[index] = action.payload;
      state.isLoading = false;
    });
    
    // Delete device
    builder.addCase(deleteDevice.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteDevice.fulfilled, (state, action) => {
      state.devices = state.devices.filter((device) => device._id !== action.payload._id);
      state.isLoading = false;
    });
  },
});

export default deviceSlice.reducer;
