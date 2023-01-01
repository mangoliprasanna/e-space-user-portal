import React from 'react'

function ErrorLayout() {
  return (
    <>
      <div className='browser-empty-box'>
        <div className='body'>
          <i className="fa fa-exclamation-triangle browser-empty-box-icon" />
          <center className='browser-empty-box-title'>
            Oops! Something went wrong! <br />
            <small>Please try again!</small>
          </center>
        </div>

      </div>
    </>
  )
}

export default ErrorLayout