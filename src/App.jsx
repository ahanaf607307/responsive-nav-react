import './App.css'
import Axios from './Components/Axios/Axios'
import GymOptions from './Components/GymOptions/GymOptions'
import LineCharts from './Components/LineCharts/LineCharts'
import Navbar from './Components/Navbar/Navbar'

function App() {
 

  return (
    <>
     <div className="container mx-auto">
     <div className='fixed top-0 z-10 flex justify-end w-full '><Navbar  /></div>
     <div className='mt-20'>
     <GymOptions/>
     </div>
     <LineCharts/>
     <div className='pt-20'>
     <Axios/>
     </div>
     
     </div>
    </>
  )
}

export default App
