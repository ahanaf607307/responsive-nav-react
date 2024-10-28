import React from 'react'
import { BarChart, Bar,  XAxis, YAxis } from 'recharts';

function Ax({phone}) {
    const {phone_name } = phone
   console.log(phone);
  return (
    <div>
     {/* <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/> */}

       <h1>{phone_name}</h1>
    </div>
  )
}

export default Ax