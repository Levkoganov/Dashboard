import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { IDeviceInput } from "../utils/types";

const useDevice = (apiRequest: (payload: IDeviceInput) => any, id?: string) => {
  const dispatch = useDispatch<AppDispatch>();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [device, setDevice] = useState({
    deviceName: "",
    serialNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    const nameValues = { ...device, [name]: value };
    setDevice(nameValues);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (device.deviceName.trim() === "" || device.serialNumber.trim() === "") {
      alert("Input is empty.\nBoth input must take a value.");
    } else {
      dispatch(apiRequest({ ...device, id }));
      setDevice({ serialNumber: "", deviceName: "" });
      handleClose();
    }
  };

  return {
    handleChange,
    handleOnSubmit,
    handleShow,
    handleClose,
    show,
    device,
  };
};

export default useDevice;
