import { createContext } from "react";
import { IBalance } from "../interfaces/Balance";

export const PointsDataCtx = createContext<IBalance[]>([]);