export interface IDevices {
  _id: string;
  deviceName: string;
  serialNumber: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IDeviceInput {
  id?: string;
  deviceName: string;
  serialNumber: string;
}
