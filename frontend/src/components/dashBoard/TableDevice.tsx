import moment from "moment";
import { Table, Button } from "react-bootstrap";
import EditDevice from "./EditDevice";
import { IDevices } from "../../utils/types";
import { useDispatch } from "react-redux";
import { deleteDevice } from "../../api/fetchDevices";
import { AppDispatch } from "../../store/store";

interface IProps {
  data: IDevices[];
}

function TableDevice({ data }: IProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnDeleteClick = (id: string) => {
    dispatch(deleteDevice(id));
  };

  return (
    <Table striped bordered hover className="mt-2">
      <thead>
        <tr>
          <th>#</th>
          <th>Device name</th>
          <th>Serial number</th>
          <th>CreatedAt</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result, index) => (
          <tr key={result._id}>
            <td>{index + 1}</td>
            <td>{result.deviceName}</td>
            <td>{result.serialNumber}</td>
            <td>{moment(result.createdAt).format("MM/DD/YYYY HH:mm:ss")}</td>
            <td>{<EditDevice name={result.deviceName} id={result._id} />}</td>
            <td>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleOnDeleteClick(result._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableDevice;
