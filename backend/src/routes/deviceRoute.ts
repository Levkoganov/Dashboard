import { Router } from "express";
import {
  getAllDevices,
  createDevice,
  updateDevice,
  deleteDevice,
} from "../controller/deviceController";

const router = Router();

router.get("/", getAllDevices);
router.post("/create", createDevice);
router.put("/update", updateDevice);
router.delete("/delete", deleteDevice);

export default router;
