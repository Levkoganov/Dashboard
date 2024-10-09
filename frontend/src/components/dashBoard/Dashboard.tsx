import { IDevices } from "../../utils/types";
import CreateDevice from "./CreateDevice";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import TableDevice from "./TableDevice";

interface IProps {
  data: IDevices[];
}
const Dashboard = ({ data }: IProps) => {
  return (
    <Container>
      <Col md={12}>
        <h1>Dashboard</h1>
        <CreateDevice />
        {data.length > 0 ? <TableDevice data={data} /> : "Devices not found."}
      </Col>
    </Container>
  );
};

export default Dashboard;
