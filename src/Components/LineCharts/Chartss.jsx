import { LineChart, Line } from 'recharts';

function Chartss({chart}) {
    console.log(chart);
  return (
    <div>
 <LineChart width={400} height={400} data={chart}>
    <Line  dataKey={chart.marks} />
  </LineChart>
    </div>
  )
}

export default Chartss