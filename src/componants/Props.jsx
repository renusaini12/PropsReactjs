import React from 'react'

export const Props = (Props) => {
  return (
    <div>
        {Props.p1.map((item,i)=>{
            return<h1>{item.Name},{i}</h1>

        })}
    </div>
  )
}
export default Props;
