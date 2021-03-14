import '../../css/Stats.css'
import {
  useContext
} from "react";
import { Chart } from "./Chart";
import { PointsDataCtx } from '../../context/PointsDataCtx';

export const Stats = () => {
  const COMPONENT_NAME = 'Stats'
  const points = useContext(PointsDataCtx);

  return (
    <div className={COMPONENT_NAME} id={COMPONENT_NAME}>
      <div className='container p-3'>
        <div className='content box'>
          <h1>Статистика</h1>
          <Chart data={points} />
        </div>
      </div>
    </div>
  )
}
