import '../../css/Stats.css'
import {
  useState,
  useEffect,
  useContext
} from "react";
import { IBalance } from "../../interfaces/Balance";
import { Chart } from "./Chart";
import API from '../../API/weeks_v1'
import { translateDate } from '../../scripts/translateDate';
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
          <div className="hictory">
              {points.map((item, idx) => (
                <div className='history-item' style={{ order: idx }} key={idx}>
                  {translateDate(item.date)}: {item.minutes.toFixed(2)}, {item.points}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
