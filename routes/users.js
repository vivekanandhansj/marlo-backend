import express from "express";
import {createUser,editUser,viewUser,deleteUser} from '../controller/users.js'
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();
//update user
router.put("/editUser/:id", verifyToken, editUser);

//delete user
router.delete("/deleteUser/:id", verifyToken, deleteUser);

//get a user
router.get("/viewUser/:id", verifyToken, viewUser);

//create a user
router.post("/createUser", createUser);

export default router;
