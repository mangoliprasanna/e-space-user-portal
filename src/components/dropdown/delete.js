import React from 'react'

function DeleteItem({ closeMenu, config }) {
  const onClick = () => {
    closeMenu();
  };
  return (
    <>
      {
        config.isTrash ? (
          <li>
            <div onClick={onClick}>
              <i className="fa fa-trash" />
              Delete Forever
            </div>
          </li>
        ) : (
          <li>
            <div onClick={onClick}>
              <i className="fa fa-trash" />
              Trash
            </div>
          </li>
        )
      }
    </>
  )
}

export default DeleteItem