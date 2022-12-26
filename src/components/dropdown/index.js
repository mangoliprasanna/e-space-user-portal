import React from 'react'

function DropdownOptions() {
  return (
    <>
      <div className="dropdown">
        <button className="btn-link dropdown-toggle text-black" type="button" data-toggle="dropdown">
          <i className="fa fa-ellipsis-v" aria-hidden="true" />
        </button>
        <ul className="dropdown-menu">
          <li>
            <a href="#">
              <i className="fa fa-link" />
              Get Link
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-star-o" />
              Add Starred
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-star" />
              Remove Starred
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-pencil" />
              Rename
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-share" />
              Share
            </a>
          </li>
          <li className="divider" />
          <li data-toggle="control-sidebar">
            <a href="#">
              <i className="fa fa-info-circle" /> View Details
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-download" /> Download
            </a>
          </li>
          <li className="divider" />
          <li>
            <a href="#">
              <i className="fa fa-trash" />
              Trash
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-trash" />
              Delete Forever
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default DropdownOptions