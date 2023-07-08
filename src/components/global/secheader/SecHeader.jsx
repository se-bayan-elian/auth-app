import React from 'react'
import Typography from '../global/typography/Typography'
import { StyledSecHeader } from './style'
const SecHeader = ({variant,size,heading1,heading2}) => {
  // variant center , left 
  // size lg ,md (font-size) 
  return (
    <StyledSecHeader className='sec-header'>
      <Typography as='h1' variant={variant} size={size}>{heading1}</Typography>
      <Typography as='h2' variant={variant}>{heading2}</Typography>
    </StyledSecHeader>
  )
}

export default SecHeader