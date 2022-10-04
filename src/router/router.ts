"use strict"
import { Router } from "express";
import UserController  from "../controllers/UserController";
import sessionController from "../controllers/sessionController";
import Permission from "../controllers/permissionController"
import { rateLimit } from "../ratelimit";
const router = Router()

router.get('/create', UserController.create)
router.get('/loggin', rateLimit(), sessionController.createSession, );
router.get('/createPermission', Permission.CreatePermission);


export default router;

