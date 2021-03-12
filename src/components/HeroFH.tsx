import { createIonIcon } from "../scripts/createIonIcon"

export const HeroFH = (props:{minutes: number, points: number}) => {
  return (
    <section className='hero is-fullheight'>
      <div className='hero-body is-flex-direction-column is-justify-content-center'>
        <div className='box'>
          <div className='subtitle'>
            Текущий баланс
                            </div>
          <div className='counter'>
            {props.minutes + props.points}
          </div>
          <div className='subtitle'>
            {createIonIcon('time-outline')}{props.minutes} {createIonIcon('star-outline')}{props.points}
          </div>
          <div className='subtitle'>
            {createIonIcon('arrow-down-outline')}
          </div>
        </div>
      </div>
    </section>
  )
}