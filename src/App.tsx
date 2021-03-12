import './css/App.css'
import {
  useState,
  useEffect
} from "react";
import {
  BrowserRouter as BR,
  Switch,
  Route
} from "react-router-dom";
import { toggleClassById } from "./scripts/toggleClassById";
import { removeClassById } from "./scripts/removeClassById";
