import React from 'react'

export const Card = (props) => {
  return (
  <>
    
            <tr key={props.index}>
                <td>{props.item.userId}</td>
                <td>{props.item.title}</td>
            </tr>
         
          {/* <h1> <span key={props.index}>{props.item.userId} : </span> {props.item.title}</h1> */}
        
  </>


  )
}
