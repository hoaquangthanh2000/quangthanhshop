import React from 'react'
import { useState } from 'react';

type Props = {
    category: string;
}

export default function Category({category}: Props) {
    
  const [check,setCheck] = useState(true)
  const handleFilterCategory = () => {
    setCheck(!check)
  }
  return (
       <div className="cursor-pointer" onChange={handleFilterCategory}>
           <input type="checkbox"  className="mx-2" 
           checked={check}/>
           {category}
        </div>
  )
}
