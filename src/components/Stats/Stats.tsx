import '../../css/Stats.css'
import {
  useContext, useEffect, useState
} from "react";
import { Chart } from "./Chart";
import { PointsDataCtx } from '../../context/PointsDataCtx';
import { Loader } from '../Loader';

export const Stats = () => {
  const COMPONENT_NAME = 'Stats'
  const points = useContext(PointsDataCtx);
  const [content, setContent] = useState(<Loader width='100%' height='100%' />);
  useEffect(() => {
    if (points.loaded) {
      setContent(<Chart data={points.data} />);
    }
  }, [points]);
  return (
    <div className={COMPONENT_NAME} id={COMPONENT_NAME}>
      <div className='container p-3'>
        <div className='content box'>
          <h1>Статистика</h1>
          {content}
        </div>
      </div>
    </div>
  )
}
