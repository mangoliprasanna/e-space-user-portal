import React from 'react'
import ViewDetails from './view-details'

function DropdownOptions({ config, context, closeMenu, position }) {
  return (
    <>
      {context ? <div
        style={{
          left: position.x,
          top: position.y,
        }}
        className='rightClick'>
        <ul className="object-dropdown-menu">
          <li>
            <div onClick={closeMenu}>
              <i className="fa fa-link" />
              Get Link
            </div>
          </li>
          <li>
            <div>
              <i className="fa fa-star-o" />
              Add Starred
            </div>
          </li>
          <li>
            <div>
              <i className="fa fa-star" />
              Remove Starred
            </div>
          </li>
          <li>
            <div>
              <i className="fa fa-pencil" />
              Rename
            </div>
          </li>
          <li>
            <div>
              <i className="fa fa-share" />
              Share
            </div>
          </li>
          <li className="divider" />
          <ViewDetails 
            closeMenu={closeMenu} 
            config={config} />
          <li>
            <div>
              <i className="fa fa-download" />
              Download
            </div>
          </li>
          <li className="divider" />
          <li>
            <div>
              <i className="fa fa-trash" />
              Trash
            </div>
          </li>
          <li>
            <div>
              <i className="fa fa-trash" />
              Delete Forever
            </div>
          </li>
        </ul>
      </div> : <></>}
    </>
  )
}

export default DropdownOptions