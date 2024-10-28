import { LineChart, Line , CartesianGrid , XAxis , YAxis , Tooltip ,Legend,  } from 'recharts';
import Chartss from "./Chartss"


function LineCharts() {
    const data = [
        { id: 1, name: 101, subject: "Math", marks: 85 },
        { id: 2, name: 102, subject: "Math", marks: 78 },
        { id: 3, name: 103, subject: "Math", marks: 92 },
        { id: 4, name: 104, subject: "Math", marks: 88 },
        { id: 5, name: 105, subject: "Math", marks: 74 },
        { id: 6, name: 106, subject: "Math", marks: 91 },
        { id: 7, name: 107, subject: "Math", marks: 83 },
        { id: 8, name: 108, subject: "Math", marks: 76 },
        { id: 9, name: 109, subject: "Math", marks: 89 },
        { id: 10, name: 110, subject: "Math", marks: 68 }
    ]
    
      
//   const [charts , setCharts] = useState([])
//      useEffect(()=> {
//         const fetchData = async () => {
//             const res = await fetch('charts.json')
//             const data = await res.json()
//             setCharts(data)

//         }
//         fetchData()
//      } , [])
  return (
    <div className='bg-red-200 mt-20'>
<LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis dataKey="marks" />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="marks" stroke="#8884d8" />
  
</LineChart>
    </div>
  )
}

export default LineCharts