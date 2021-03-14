import '../../css/Stats.css'
import React, {
  createRef,
  useContext, useEffect, useState
} from "react";
import { Chart } from "./Chart";
import { PointsDataCtx } from '../../context/PointsDataCtx';
import { Loader } from '../Loader';
import { Range, RangeProps } from "rc-slider";
import '../../css/slider.css';

export const Stats = () => {
  const COMPONENT_NAME = 'Stats'
  const points = useContext(PointsDataCtx);
  const [content, setContent] = useState(<Loader width='100%' height='100%' />);
  const [bounds, setBounds] = useState<{ left: number, right: number}>({left: 0, right: 0});

  const handleInput = (value: Array<number>) => {
    setBounds({ left: value[0], right: value[1] });
  }
  const RP: RangeProps = {
    min: 0,
    max: points.data.length - 1,
    step: 1,
    defaultValue: [points.data.length - 1 - 7, points.data.length - 1],
    count: 1,
    pushable: 4,
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
      setContent(
        <>
          <Chart data={points.data.slice(left, right + 1)} redraw={true}/>
          <Range {...RP} />
          </>
      );
    }
  }, [points]);

  useEffect(() => {
    setContent(
      <>
        <Chart data={points.data.slice(bounds.left, bounds.right + 1)} redraw={true} />
        <Range {...RP} />
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
