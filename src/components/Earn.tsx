import '../css/Earn.css';
import '../css/Rules.css';
import Points from '../json/points.json'
import { createIonIcon } from "../scripts/createIonIcon";

export const COMPONENT_NAME = 'Earn';

export default function Spend() {
  const MARKS_POINTS = JSON.parse(JSON.stringify(Points)).marks;
  const SHEETS_POINTS = JSON.parse(JSON.stringify(Points)).sheets;
  const ADD = '+';
  const SUBT = '−';
  const MUL = '∙';
  const DIV = ':';
  let i = 0;
  return (
    <div className={COMPONENT_NAME}>
      <div className='container p-3 py-6'>
        <div className='content box'>
          <h1>Как получать баллы</h1>
          <ul className=''>
            <li key={i++}>
              При подсчете {createIonIcon('time-outline')}минут, сначала складываются {createIonIcon('star-outline')}баллы за "5", "4", "3".
            </li>
            <li key={i++}>
              Каждая "5" приносит {createIonIcon('time-outline')}{MARKS_POINTS.five} минут.
            </li>
            <li key={i++}>
              Каждая "4" приносит {createIonIcon('time-outline')}{MARKS_POINTS.four} минут.
            </li>
            <li key={i++}>
              Каждая "3" вычитает {createIonIcon('time-outline')}{MARKS_POINTS.three} минут.
            </li>
            <li key={i++}>
              Каждая "2" делит {createIonIcon('time-outline')}минуты за другие оценки на 2.
            </li>
          </ul>
          <p>Например, за три "5", пять "4", две "3" и одну "2" ты получишь:</p>
          <p className='example notification is-light'>
            ({MARKS_POINTS.five} {MUL} 3 {ADD} {MARKS_POINTS.four} {MUL} 5 {SUBT} {MARKS_POINTS.three} {MUL} 2 ) {DIV} (2 {MUL} 1) = {(MARKS_POINTS.five * 3 + MARKS_POINTS.four * 5 - MARKS_POINTS.three * 2) / (2 * 1)} {createIonIcon('time-outline')}минут
          </p>
          <p>
            Помни, что {createIonIcon('star-outline')}баллы можно зарабатывать и иначе. Каждый листочек приносит немного {createIonIcon('star-outline')}баллов за каждый решенный пример на этом листке. Например цена примера - {createIonIcon('star-outline')}3, на листке четыре примера, значит максимально можно получить {createIonIcon('star-outline')}12 баллов.
          </p>
          <ul>
            {SHEETS_POINTS.level.map((
              item: { colorName: string, cost: number },
              idx: number) => {
              return <>
                <li key={idx}>Примеры на <span className={`tag is-task-level-${idx + 1}`} style={{fontSize: '0.9rem'}}>
                  {item.colorName}
                </span> листке стоят {createIonIcon('star-outline')}{item.cost} баллов.</li>
              </>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}