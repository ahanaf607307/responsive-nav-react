
import './App.css'
import GymOptions from './Components/GymOptions/GymOptions'
import Navbar from './Components/Navbar/Navbar'

function App() {
 

  return (
    <>
     <div className="container mx-auto">
     <div className='fixed top-0 z-10 flex justify-end w-full '><Navbar  /></div>
     <div className='mt-20'>
     <GymOptions/>
     </div>
     </div>
    </>
  )
}

export default App
