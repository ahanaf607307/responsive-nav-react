import React, { useEffect, useState } from 'react'
import GymOption from './GymOption'


function GymOptions() {
    const [gyms , setGym ] = useState([])
    useEffect(() => {
        const gymDataFetch = async () => {
            const res = await fetch("gymData.json")
            const data = await res.json()
            setGym(data);
        }
        gymDataFetch()
    } , [])
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
{
    gyms.map(gym => <GymOption gym={gym}/>)
}
    </div>
  )
}

export default GymOptions