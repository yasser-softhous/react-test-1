import axios from 'axios'
import { Card } from '../Card/Card'
import React, { useState, useEffect } from 'react'




export const GetApi = () => {
  const [myData, setData] = useState([])
  const func = async () => {
   
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
      setData(res.data)
    } catch (error) {
      console.log(error)    
  }
    
  }

  useEffect(() => {
    func()
  }, [])

  
  return (
    <div>
      <table className='table table-hover table-bordered'>
        <tr>
          <th>#</th>
          <th>Data</th>
        </tr>
        {
          myData.map((item, index) => {
            return <Card key={index} item={item} />

          })
        }
      </table>
    </div>



  )
}





