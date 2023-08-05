import React from 'react'
import Left from './Left'
import Right from './Right'

const Login = ({setPage}) => {
  return (
    <div className='login-page' style={{display : 'flex', height : '100vh'}}>
      <Left ></Left>
      <Right setPage={setPage}></Right>
    </div>
  )
}

export default Login