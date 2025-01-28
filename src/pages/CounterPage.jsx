import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCounter } from '../slices/counterSlice'
import axios from 'axios'

function CounterPage() {
  const dispatch = useDispatch()
  const item = useSelector(state => state.counter.item)

  useEffect(() => {
    axios.get("http://localhost:5500/counters")
      .then(res => {
        const data = res.data
        dispatch(setCounter(data))
      })
      .catch(err => console.log(err))
  }, [dispatch])

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Counters</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {item.map(counter => (
          <div 
            key={counter.id}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <p className="text-xl font-medium text-gray-800">
              {counter.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CounterPage