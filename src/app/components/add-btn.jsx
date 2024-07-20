import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function addBtn() {
  return (
    <button className='bg-blue-600 hover:bg-blue-700 active:bg-gray-500 p-1 rounded text-white'><Icon icon="ic:baseline-plus" /></button>

  )
}
