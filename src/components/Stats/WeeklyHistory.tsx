import { IBalance } from "../../interfaces/Balance"
import { translateDate } from "../../scripts/translateDate"

export const WeeklyHistory = (props: {data: IBalance[]}) => {
  const BODY = props.data.map((item, idx) => (
      <div className='scrollable-item' style={{ order: idx }} key={idx}>
        {translateDate(item.date)}: {item.minutes.toFixed(2)}, {item.points}
      </div>
    ))
  return (
    <div className='mt-3'>
      <h4>Операции за неделю</h4>
      (пока тоже самое что на графике сверху)
      <div className='scrollable notification' style={{ height: '35vh' }}>
        <div className=''>
          {BODY}
        </div>
      </div>
    </div>
  )
}
