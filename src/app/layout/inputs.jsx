import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import AddBtn from '../components/add-btn';
import InputBox from '../components/input-box';

export default function Inputs() {
  return (
    <div className='h-full'>
        <div className='flex gap-2 items-center justify-between  p-3 border-b'>
          <div className='flex gap-2 items-center'><Icon icon="carbon:download" /><div>Inputs(8)</div></div>
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