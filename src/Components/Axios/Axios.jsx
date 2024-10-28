import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Ax from './Ax'
// import { BarChart, Bar,  XAxis, YAxis } from 'recharts';
import { Audio ,Circles } from 'react-loader-spinner';

function Axios() {
    const [loading ,setLoading] = useState(true)
    const [phones , setPhones ] = useState([])
    const fetchData = async () => {
        const data = await axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        setPhones(data.data.data)
        setLoading(false)
        
     }
    useEffect(() => {
        fetchData()
        // axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(data=> {
        //    const phoneData = data.data.data
        //    const newPhoneData = phoneData.map(phone =>{
        //      const obj  = {
        //         name : phone.phone_name,
        //         price : parseInt(phone.slug.split('-')[1])
        //     }
        //     return obj
        //    } )
        //    setPhones(newPhoneData)
        // })
    } , [])
    
  return (
    <div className='text-xl'>
        <h1 >{phones.length}</h1>
        {loading &&
            <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        }
       {
        phones.map(phone => <Ax phone={phone}/>)
       }
      
        {/* <BarChart width={900} height={600} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
         
          <XAxis dataKey="name"></XAxis>
        </BarChart> */}
      
    </div>
  )
}

export default Axios