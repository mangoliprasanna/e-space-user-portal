import React from 'react'

function RenameItem({ closeMenu, config }) {
  const onClick = () => {
    closeMenu();
  };

  return (
    <>
      <li>
        <div onClick={onClick}>
          <i className="fa fa-pencil" />
          Rename
        </div>
      </li>
    </>
  )
}

export default RenameItem