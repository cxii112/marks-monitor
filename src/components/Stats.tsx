import '../css/Stats.css'
import {
  useState,
  useEffect
} from "react";
import { IBalance } from "../interfaces/Balance";
import API from '../API/weeks_v1'

export const Stats = () => {
  const COMPONENT_NAME = 'Stats'
  const [data, setData] = useState<IBalance[]>([]);
  useEffect(() => {
    API.get()
      .then(response => setData(response.data.payload))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={COMPONENT_NAME}>
      <div className='container'>
        <div className='content'>
          <h1>Статистика</h1>
          <ul>
            {data.map((item, idx) => (
              <li style={{ order: idx }} key={idx}>
                {item.date}: {item.minutes.toFixed(2)}, {item.poinst}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
