import React from 'react'
import SocialMedia from './socialmedia/SocialMedia'
import SecHeader from '../../global/secheader/SecHeader'

const Login = () => {
  return (
    <div>
      <SocialMedia></SocialMedia>
      <SecHeader heading1='Join the game!' heading2='For the purpose of gamers regulation, your details are required.' variant='center' size='md'></SecHeader>
    </div>
  )
}

export default Login