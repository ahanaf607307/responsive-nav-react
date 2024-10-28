import React from 'react'
import Feature from './Feature'

function GymOption({gym}) {
    const { gymCategory , billingCycle ,price , gymFeatures} = gym
  return (
    <>
    
    <div class="card  bg-teal-700 text-neutral-content flex flex-col border border-cyan-300 p-3">
  <div class="card-body items-center text-center">
    <h2 class="card-title text-2xl md:text-4xl">{gymCategory}</h2>
    <h4 className='text-2xl'>{price} $ {billingCycle}</h4>
    <div className='flex-grow'>
    {
        gymFeatures.map(gymFeature => <Feature gymFeature={gymFeature} />)
    }
    </div>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
    </>
  )
}

export default GymOption