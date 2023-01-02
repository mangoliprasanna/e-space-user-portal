import React from 'react'
import { useDispatch } from 'react-redux';
import { updateFileApiCall, updateFolderApiCall } from '../../redux/reducers/storage.reducer';
import ToastHelper from '../../utils/toast.utils';

function DeleteItem({ closeMenu, config }) {
  const dispatch = useDispatch();
  const onClick = () => {
    const msg = `Moved to trash!`;
    const error = `Unable to complete request!`;
    if (config.type) {
      ToastHelper.promise(
        dispatch(updateFileApiCall(config.code, { isTrash: true })),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(updateFolderApiCall(config.code, { isTrash: true })),
        msg,
        error
      );
    }
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