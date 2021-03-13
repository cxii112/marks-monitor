import { ChartDataSets, ChartOptions } from "chart.js";
import { Bar, ChartData } from "react-chartjs-2";
import { IBalance } from "../../interfaces/Balance";
import { translateDate } from "../../scripts/translateDate";


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
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 20
      }
    },
    devicePixelRatio: 4
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
      <Bar
        data={CHART_DATA}
        options={CHART_OPTIONS}
        height={0.4 * window.innerHeight}
      />
    </div>
  )
}