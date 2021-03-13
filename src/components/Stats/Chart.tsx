import { ChartConfiguration, ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Bar, ChartComponentProps, ChartData, defaults } from "react-chartjs-2";
import { IBalance } from "../../interfaces/Balance";


export const Chart = (props: { data: IBalance[] }) => {
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
    maintainAspectRatio: false
  }
  const MINUTES_DATASET: ChartDataSets = {
    label: 'Минуты',
    data: props.data.map(item => item.minutes),
    backgroundColor: props.data.map(i => '#1cff1c88')
  }
  const POINTS_DATASET: ChartDataSets = {
    label: 'Баллы',
    data: props.data.map(item => item.points),
    backgroundColor: props.data.map(i => '#00c3ff88')
  }
  const CHART_DATA: ChartData<any> = {
    labels: props.data.map(item => item.date),
    datasets: [MINUTES_DATASET, POINTS_DATASET]
  }
  return (
    <div className="continer">
      <Bar data={CHART_DATA} options={CHART_OPTIONS} height={500}/>
    </div>
  )
}