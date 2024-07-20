import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function OutputBox() {
  return (
    <div className='rounded overflow-hidden border-2 mb-3'>
        <div className='bg-gray-100 flex justify-between p-2'>
            <div>Equipment for Hire</div>
            <div className='flex gap-2 items-center'>
                <div className='text-lg text-gray-500 hover:bg-gray-300 p-1'><Icon icon="ep:info-filled" /></div>
                <div className='text-lg text-gray-500 hover:bg-gray-300 p-1'><Icon icon="fe:elipsis-h" /></div>
            </div>
        </div>
        <div className='relative p-2'>
            <div className='absolute top-1/2 left-2 -translate-y-1/2 text-gray-500'><Icon icon="healthicons:dollar" /></div>
            <input type="text" className='outline outline-1 rounded outline-gray-400 pl-10 w-full'/>
        </div>
    </div>
  )
}
