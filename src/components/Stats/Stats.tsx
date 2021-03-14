import '../../css/Stats.css'
import {
  useContext, useEffect, useState
} from "react";
import { Chart } from "./Chart";
import { PointsDataCtx } from '../../context/PointsDataCtx';
import { Loader } from '../Loader';
import { Range, RangeProps } from "rc-slider";
import '../../css/slider.css';
import { IBalance } from '../../interfaces/Balance';
import { translateDate } from '../../scripts/translateDate';

export const Stats = () => {
  const COMPONENT_NAME = 'Stats'
  const points = useContext<{data: IBalance[], loaded: boolean}>(PointsDataCtx);
  const [content, setContent] = useState(<Loader width='100%' height='100%' />);
  const [bounds, setBounds] = useState<{ left: number, right: number }>(() => {
    let left;
    let right;
    if (points.loaded) {
      right = points.data.length - 1;
      if (right - 7 > 0) {
        left = right - 7;
      } else {
        left = 0;
      }
    } else {
      left = 0;
      right = 4;
    }
    return { left: left, right: right };
  });

  const handleInput = (value: Array<number>) => {
    setBounds({ left: value[0], right: value[1] });
  }
  const RP: RangeProps = {
    min: 0,
    max: points.data.length - 1,
    step: 1,
    value: [bounds.left, bounds.right],
    count: 1,
    pushable: 3,
    draggableTrack: true,
    onChange: handleInput,
    dots: points.data.length < 13,
  };
  useEffect(() => {
    if (points.loaded) {
      const right = points.data.length - 1;
      let left;
      if (right - 7 > 0) {
        left = right - 7;
      } else {
        left = 0;
      }
      setBounds({ left: left, right: right });
    }
  }, [points]);

  useEffect(() => {
    setContent(
      <>
        <Chart data={points.data.slice(bounds.left, bounds.right + 1)} />
        <div className='mt-3'>
          <Range {...RP} />
        </div>
      </>
    )
  }, [bounds]);

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
