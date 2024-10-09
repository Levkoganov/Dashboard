import { Button } from "react-bootstrap";
import { updateDevice } from "../../api/fetchDevices";
import useDevice from "../../hooks/useDevice";
import FormPopUp from "../FormPopUp";

interface IProps {
  name: string;
  id: string;
}

const EditDevice = ({ name, id }: IProps) => {
  const {
    device,
    show,
    handleChange,
    handleOnSubmit,
    handleShow,
    handleClose,
  } = useDevice(updateDevice, id);

  return (
    <div>
      <Button variant="success" size="sm" onClick={handleShow}>
        Edit
      </Button>

      <FormPopUp
        title={`Edit device: ${name}`}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleChange}
        handleClose={handleClose}
        show={show}
        device={device}
      />
    </div>
  );
};

export default EditDevice;
