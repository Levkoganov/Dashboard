import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { IDeviceInput } from "../utils/types";

interface IProps {
  title: string;
  device: IDeviceInput;
  show: boolean;
  handleClose: () => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent) => void;
}

const FormPopUp = ({
  title,
  device,
  show,
  handleClose,
  handleOnChange,
  handleOnSubmit,
}: IProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleOnSubmit}>
          <Form.Label>Device name</Form.Label>
          <Form.Control
            type="text"
            value={device.deviceName}
            name="deviceName"
            placeholder="Device name"
            onChange={handleOnChange}
          />
          <Form.Label className="mt-3">Serial number</Form.Label>
          <Form.Control
            type="text"
            value={device.serialNumber}
            name="serialNumber"
            placeholder="Serial number"
            onChange={handleOnChange}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleOnSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormPopUp;
