import { createContext } from "react";
import { IBalance } from "../interfaces/Balance";

export const PointsDataCtx = createContext<{
  data: IBalance[],
  loaded: boolean
}>({
  data: [],
  loaded: false
});