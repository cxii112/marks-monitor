import { useContext, useEffect, useState } from 'react';
import { PointsDataCtx } from "../../context/PointsDataCtx";
import { createIonIcon } from "../../scripts/createIonIcon";
import { Loader } from '../Loader';

export const HeroFH = (props: { minutes: number, points: number }) => {
  const isDataLoaded = useContext(PointsDataCtx).loaded;
  const [content, setContent] = useState(<Loader width='100%' height='100%' />)
  useEffect(() => {
    if (isDataLoaded) {
      setContent(<>
        <div className='subtitle'>
          Текущий баланс
          </div>
          <div className='counter' style={{fontSize: `${38 * (1 / (String(props.minutes + props.points).length / 3))}vmin`}}>
            {props.minutes + props.points}
          </div>
          <div className='subtitle'>
            {createIonIcon('time-outline')}{props.minutes} {createIonIcon('star-outline')}{props.points}
          </div>
          <div className='subtitle'>
            <a className='button p-3 is-rounded is-outlined is-secondary' href='#Stats'>
              {createIonIcon('arrow-down-outline')}
            </a>
          </div>
        </>)
    }
  }, [isDataLoaded]);
  return (
    <section className='hero is-fullheight'>
      <div className='hero-body is-flex-direction-column is-justify-content-center'>
        <div id='hero-box' className='box is-flex is-flex-direction-column is-justify-content-space-between'>
          {content}
        </div>
      </div>
    </section>
  )
}