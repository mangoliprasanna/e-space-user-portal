import React from 'react'

function EmptyLayout() {
  return (
    <>
      <div className='browser-empty-box'>
        <div className='body'>
          <i className="fa fa-cloud-upload browser-empty-box-icon" />
          <center className='browser-empty-box-title'>
            Start uploading files or folders
          </center>
        </div>

      </div>
    </>
  )
}

export default EmptyLayout