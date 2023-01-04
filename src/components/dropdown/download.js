import React from 'react'
import useAuth from '../../hooks/useAuth';

function DownloadItem({ closeMenu, config }) {
  const { user } = useAuth();
  const onClick = () => {
    window.open(`/api/file/download/${config.code}?user=${user._id}`, "_blank");
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