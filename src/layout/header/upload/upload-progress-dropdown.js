import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUploadingItems, uploaderState } from '../../../redux/reducers/uploader.reducer';
import UploadProgressItem from './upload-progress-item'

function UploadProgressDropdown() {
  const { items, isUploading } = useSelector(uploaderState);
  const dispatch = useDispatch();
  const length = Object.keys(items).length;

  const clearItems = () => {
    dispatch(clearUploadingItems());
  };

  if (length === 0) {
    return (
      <></>
    );
  }

  return (
    <>
      <li className="dropdown tasks-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          {
            isUploading === true ?
              (<span className="buttonIcon">
                <i className="fa fa-refresh fa-spin" />
              </span>)
              :
              (<span className="buttonIcon">
                <i className="fa fa-check" />
              </span>)
          }

          {isUploading === true ? 'Uploading item' : 'Upload Done'}

        </a>
        <ul className="dropdown-menu">
          <li className="header">
            {length} item{length === 1 ? '' : 's'}
            <div className='pull-right' onClick={clearItems}>Clear All</div>
          </li>
          <li>
            <ul className="menu">
              {Object.keys(items).reverse().map((e) => {
                return (<UploadProgressItem key={e} id={e} config={items[e]} />)
              })}
            </ul>
          </li>
        </ul>
      </li>
    </>
  )
}

export default UploadProgressDropdown