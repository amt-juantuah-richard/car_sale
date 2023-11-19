"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      onClick={props.handleClick}
      disabled={false}
      type={ props.btnType || `button`}
      className={`custom-btn ${props.containerStyles}`}
    >
      <span className={`flex-1`}>
        { props.title }
      </span>
    </button>
  )
}

export default CustomButton