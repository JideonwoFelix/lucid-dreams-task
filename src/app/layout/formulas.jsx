import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import AddBtn from '../components/add-btn';
import InputBox from '../components/input-box';


export default function Formulas() {
  return (
    <div className='lg:col-span-3'>
      <div className='flex gap-2 items-center justify-between  p-3 border-b'>
        <div className='flex gap-2 items-center'><Icon icon="tabler:square-root-2" /><div>Formulas (8)</div></div>
        <AddBtn/>
      </div>
      
      <div className='p-3 overflow-y-scroll h-[80vh] xflex flex-col gap-3'>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          <InputBox/>
          
        </div>
    </div>
  )
}
