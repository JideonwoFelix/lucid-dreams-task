import React from 'react';
import AddBtn from '../components/add-btn';
import { Icon } from '@iconify/react/dist/iconify.js';
import InputBox from '../components/input-box';

export default function Outputs() {
  return (
    <div className=''>
      <div className='flex gap-2 items-center justify-between  p-3 border-b'>
        <div className='flex gap-2 items-center'><Icon icon="material-symbols:upload-sharp" /><div>Outputs (8)</div></div>
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
