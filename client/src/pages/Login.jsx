import { SignIn } from '@clerk/clerk-react'
import React from 'react'

export default function Login() {
  return (
    <div className='flex justify-center items-center'>
      <SignIn />
    </div>
  )
}
