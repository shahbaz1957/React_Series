import React from 'react'
import { useRouteError } from 'react-router-dom'
function ErrorElement() {
    const error = useRouteError()
    console.log(error);

  return (
    <div
    className='text-center text-3xl text-red-500 
    shadow-neutral-900 rounded-md bg-slate-600
    px-4 py-4 mt-0 
    '
    >Something wrong :{error.status} 😬😋 {error.statusText}
    
    </div>
  )
}

export default ErrorElement