import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid } = useParams()
  return (
    <div className='flex flex-wrap bg-slate-500
     text-white content-center justify-center
     p-4 text-3xl
     '
     >User: {userid}</div>
  )
}

export default User