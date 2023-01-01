import React from 'react'

function GetLink({ closeMenu, config }) {
  const onClick = () => {
    closeMenu();
  };

  return (
    <>
      <li>
        <div onClick={onClick}>
          <i className="fa fa-link" />
          Get Link
        </div>
      </li>
    </>
  )
}

export default GetLink