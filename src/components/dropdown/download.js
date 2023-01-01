import React from 'react'

function DownloadItem({ closeMenu, config }) {
  const onClick = () => {
    closeMenu();
  };

  return (
    <>
      <li>
        <div onClick={onClick}>
          <i className="fa fa-download" />
          Download
        </div>
      </li>
    </>
  )
}

export default DownloadItem