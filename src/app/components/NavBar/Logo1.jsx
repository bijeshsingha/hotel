'use client'
import React from 'react'
import Image from 'next/image'
const Logo1 = () => {
  return (
    <Image 
        alt="logo"
        className='block cursor-pointer'
        height='100'
        width='200'
        src='/logo/divineviewlogo.jpg'
    />
  )
}

export default Logo1