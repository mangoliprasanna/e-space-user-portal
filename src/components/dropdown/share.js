import React from 'react'

function ShareItem({ closeMenu, config }) {
  const onClick = () => {
    closeMenu();
  };

  return (
    <>
      <li>
        <div onClick={onClick}>
          <i className="fa fa-share" />
          Share
        </div>
      </li>
    </>
  )
}

export default ShareItem