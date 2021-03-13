import '../../css/Stats.css'
import {
  useState,
  useEffect
} from "react";
import { IBalance } from "../../interfaces/Balance";
import { Chart } from "./Chart";
import API from '../../API/weeks_v1'
import { translateDate } from '../../scripts/translateDate';

export const Stats = () => {
  const COMPONENT_NAME = 'Stats'
  const [data, setData] = useState<IBalance[]>([]);
  useEffect(() => {
    API.get()
      .then(response => setData(response.data.payload))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={COMPONENT_NAME} id={COMPONENT_NAME}>
      <div className='container p-3'>
        <div className='content box'>
          <h1>Статистика</h1>
          <Chart data={data} />
          <div className="hictory">
              {data.map((item, idx) => (
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
