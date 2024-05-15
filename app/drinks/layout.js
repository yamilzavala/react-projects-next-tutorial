import React from 'react'

const Drinkloyout = ({children}) => {
  return (
    <div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">You are using a layout for drinks page.</h2>
          </div>
        </div>
        {children}
    </div>
  )
}

export default Drinkloyout