import React from 'react'
import FilterCategory from './FilterCategory';

export default function Filter() {
  return (
    <div className='flex flex-col p-8 '>
        <div className='text-xl font-bold'>Bộ lọc tìm kiếm </div>
        <FilterCategory/>
        <div className=''>thanh dep trai vcc</div>
    </div>
  )
}
