"use client"

import React from 'react'
import "./style.css"



type Props = {
    description: string
}


const Description = ( { description }: Props) => {
 
  
  return (
    <div className='description' dangerouslySetInnerHTML={{ __html: description }}>
       
    </div>
  )
}

export default Description