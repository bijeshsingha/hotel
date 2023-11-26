'use client'
import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image 
        alt="logo"
        className='min-w-full cursor-pointer'
        height='100'
        width='150'
        src='/logo/Logo1.png'
    />
  )
}

export default Logo