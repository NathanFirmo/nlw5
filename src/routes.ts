import { request, response, Router } from "express";
import {SettingsController} from "./controlers/SettingsController"

const routes = Router();
const settingsController = new SettingsController();
routes.post("/settings", settingsController.create)

export {routes};