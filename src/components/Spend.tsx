import React from 'react';
import '../css/Spend.css';
import '../css/Rules.css';
import { createIonIcon } from '../scripts/createIonIcon';

export const Spend = () => {
  const COMPONENT_NAME = 'Spend';
  return (
    <div className={COMPONENT_NAME}>
      <div className='container'>
        <div className='content'>
          <h1>Как тратить баллы</h1>
          <p>Для начала обговорим основные ограничения.</p>
          <ul>
            <li>
              {createIonIcon('time-outline')}Минуты могут использоваться как {createIonIcon('star-outline')}баллы. {createIonIcon('time-outline')}1 минута = {createIonIcon('star-outline')}1 балл.
            </li>
            <li>
              {createIonIcon('star-outline')}Баллы нельзя использовать как {createIonIcon('time-outline')}минуты.
            </li>
            <li>
              Заработанные {createIonIcon('star-outline')}баллы можно потратить на "ништяки" (список "ништяков" еще не готов).
            </li>
            <li>
              {createIonIcon('star-outline')}Баллы на ништяки можно тратить в любой день недели.
            </li>
          </ul>
          <p>Хорошо, с этим разобрались. Ну а теперь подробнее о том, как высчитываются траты.</p>
          <ul>
            <li>
              {createIonIcon('time-outline')}Минуты можно потратить на время игры в компьютер.
            </li>
            <li>
              Если {createIonIcon('star-outline')}баллов за листочки хватает, то ништяки покупаются на них.
            </li>
            <li>
              Если {createIonIcon('star-outline')}баллов за листочки на хватает, то можно вычесть недостающие {createIonIcon('star-outline')}баллы из {createIonIcon('time-outline')}минут.
            </li>
            <li>
              Если и так {createIonIcon('star-outline')}баллов не хватило, то, увы, никаких ништяков.
            </li>
          </ul>
          <p>Неиспользованные {createIonIcon('star-outline')}баллы можно копить, например:</p>
          <p className='example notification is-light'>
            После расчета было {createIonIcon('star-outline')}2000 баллов и 45 минут. {createIonIcon('star-outline')}1000 ты потратил, а остальное решил оставить. Получается у тебя теперь {createIonIcon('star-outline')}1000 баллов и 45 минут.
          </p>
          <p >Самое важное помнить, что минуты копятся <span className='has-background-warning'>отдельно</span> от баллов за листочки, а тратиться - <span className='has-background-warning'>вместе</span>. Например:</p>
          <p className='example notification is-light'>
            После расчета было {createIonIcon('star-outline')}450 баллов и 80 минут. {createIonIcon('star-outline')}500 ты потратил, а остальное решил оставить. Получается у тебя теперь {createIonIcon('star-outline')}0 баллов и 30 минут.
          </p>
        </div>
      </div>
    </div>
  )
}