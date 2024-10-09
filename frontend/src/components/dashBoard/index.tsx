import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchAllDevices } from "../../api/fetchDevices";
import Dashboard from "./Dashboard";

const Home = () => {
  const { devices } = useSelector((state: RootState) => state.devices);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllDevices());
  }, [dispatch]);

  return (
    <div>
      <Dashboard data={devices} />
    </div>
  );
};

export default Home;
