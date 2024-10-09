import Button from "react-bootstrap/Button";
import { createDevice } from "../../api/fetchDevices";
import FormPopUp from "../FormPopUp";
import useDevice from "../../hooks/useDevice";

const CreateDevice = () => {
  const {
    device,
    show,
    handleChange,
    handleOnSubmit,
    handleShow,
    handleClose,
  } = useDevice(createDevice);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create New Device
      </Button>

      <FormPopUp
        title="Create new device"
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleChange}
        handleClose={handleClose}
        show={show}
        device={device}
      />
    </div>
  );
};

export default CreateDevice;
