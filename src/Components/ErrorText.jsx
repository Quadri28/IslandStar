import React from 'react'

const ErrorText = ({children}) => {
  return (
    <div className='text-danger' style={{fontSize:'12px'}}>
      {children}
    </div>
  )
}

export default ErrorText
