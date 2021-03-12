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
import { NavSideBar } from "./components/NavSideBar";
import { Stats } from "./components/Stats";
import { Spend } from "./components/Spend";
import { Earn } from "./components/Earn";
import { IBalance } from "./interfaces/Balance";
import WEEKS_API from "./API/weeks_v1";
import Categories from "./json/categories.json";
import { Bar } from './components/Bar';
import { HeroFH } from './components/HeroFH';


export default function App() {
  const COMPONENT_NAME = 'App';
  const CATEGORIES = JSON.parse(JSON.stringify(Categories));
  const [balance, setBalance] = useState<IBalance[]>([]);
  const [minutes, setMinutes] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    WEEKS_API.get()
      .then(response => setBalance(response.data.payload))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (balance.length) {
      let last = balance.length - 1
      setMinutes(Number(balance[last].minutes.toFixed(2)));
      setPoints(balance[last].points)
    }
  }, [balance]);

  return (
    <div className={COMPONENT_NAME}>
      <BR>
        <Bar />
        <NavSideBar />
        <Switch>
          {CATEGORIES.list.map(
            (cat: { name: string, title: string, link: string }, idx: number) => {
              let result;
              switch (cat.name) {
                case 'main':
                  result = (
                    <>
                      <HeroFH minutes={minutes} points={points} />
                      <section>
                        <Stats />
                      </section>
                    </>
                  );
                  break;
                case 'earn':
                  result = <Earn />
                  break;
                case 'spend':
                  result = <Spend />
                  break;
                case 'stats':
                  result = <Stats />
                  break;
                default:
                  break;
              }
              return (
                <Route path={cat.link} key={idx}>
                  <div>
                    {result}
                  </div>
                </Route>
              )
            })}
        </Switch>
      </BR>
    </div>
  )
}