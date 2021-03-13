import { ChartConfiguration, ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Bar, ChartComponentProps, ChartData, defaults } from "react-chartjs-2";
import { IBalance } from "../../interfaces/Balance";
import { translateDate } from "../../scripts/translateDate";


export const Chart = (props: { data: IBalance[] }) => {
  // const DATES = props.data.map(item => {
  //   let date = new Date(item.date).toUTCString().split(' ');
  //   let date_ru_day;
  //   let date_ru_mon;
  //   switch (date[0].slice(0, 3)) {
  //     case 'Mon':
  //       date_ru_day = 'ПН'
  //       break;
  //     case 'Tue':
  //       date_ru_day = 'ВТ'
  //       break;
  //     case 'Wed':
  //       date_ru_day = 'СР'
  //       break;
  //     case 'Thu':
  //       date_ru_day = 'ЧТ'
  //       break;
  //     case 'Fri':
  //       date_ru_day = 'ПТ'
  //       break;
  //     case 'Sat':
  //       date_ru_day = 'СБ'
  //       break;
  //     case 'Sun':
  //       date_ru_day = 'ВС'
  //       break;
  //   }
  //   switch (date[2]) {
  //     case 'Jan':
  //       date_ru_mon = 'Янв'
  //       break;
  //     case 'Feb':
  //       date_ru_mon = 'Фев'
  //       break;
  //     case 'Mar':
  //       date_ru_mon = 'Мар'
  //       break;
  //     case 'Apr':
  //       date_ru_mon = 'Апр'
  //       break;
  //     case 'May':
  //       date_ru_mon = 'Май'
  //       break;
  //     case 'Jun':
  //       date_ru_mon = 'Июн'
  //       break;
  //     case 'Jul':
  //       date_ru_mon = 'Июл'
  //       break;
  //     case 'Aug':
  //       date_ru_mon = 'Авг'
  //       break;
  //     case 'Sep':
  //       date_ru_mon = 'Сен'
  //       break;
  //     case 'Oct':
  //       date_ru_mon = 'Окт'
  //       break;
  //     case 'Noc':
  //       date_ru_mon = 'Ноя'
  //       break;
  //     case 'Dec':
  //       date_ru_mon = 'Дек'
  //       break;
  //   }
  //   return `${date_ru_day} ${date[1]} ${date_ru_mon} ${date[3]}`
  // })
  const CHART_OPTIONS: ChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    tooltips: { enabled: true },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 20
      }
    }
  }
  const MINUTES_DATASET: ChartDataSets = {
    label: 'Минуты',
    data: props.data.map(item => Number(item.minutes.toFixed(2))),
    backgroundColor: props.data.map(i => '#1cff1c88')
  }
  const POINTS_DATASET: ChartDataSets = {
    label: 'Баллы',
    data: props.data.map(item => item.points),
    backgroundColor: props.data.map(i => '#00c3ff88')
  }
  const CHART_DATA: ChartData<any> = {
    labels: props.data.map(item => translateDate(item.date)),
    datasets: [MINUTES_DATASET, POINTS_DATASET]
  }
  return (
    <div className="continer">
      <Bar data={CHART_DATA} options={CHART_OPTIONS} height={500}/>
    </div>
  )
}