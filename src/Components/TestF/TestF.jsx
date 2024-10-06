import React,{useState} from 'react'

export const TestF = (props) => {
    const [data,setData]=useState({name:'aly ahmed',balance:30});
    const increaseBalance=()=>setData({...data,balance:data.balance + 1})
    const decreasBalance=()=>setData({...data,balance:data.balance - 1})
    const resetBalance=()=>setData({...data,balance:0})
  return (
    <>
        <h3>Name : {data.name} </h3>
        <h2>Balance : {data.balance} {props.currency}</h2>
         <br/>
      <button className='btn btn-danger m-1' type="button" onClick={increaseBalance}>Increase balance</button>
      <button className='btn btn-danger m-1' type="button" onClick={decreasBalance}>Decrise balance</button>
      <button className='btn btn-danger m-1' type="button" onClick={resetBalance}>Reset balance</button>
    </>
  )
}
