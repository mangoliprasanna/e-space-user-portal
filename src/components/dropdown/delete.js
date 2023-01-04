import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteFileApiCall, deleteFolderApiCall, updateFileApiCall, updateFolderApiCall } from '../../redux/reducers/storage.reducer';
import ToastHelper from '../../utils/toast.utils';

function DeleteItem({ closeMenu, config }) {
  const dispatch = useDispatch();
  const error = `Unable to complete request!`;
  const moveToTrash = () => {
    const msg = `Moved to trash!`;
    if (config.type) {
      ToastHelper.promise(
        dispatch(updateFileApiCall(config.code, { isTrash: true }, config)),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(updateFolderApiCall(config.code, { isTrash: true }, config)),
        msg,
        error
      );
    }
    closeMenu();
  };

  const deleteForever = () => {
    const msg = `Item deleted!`;

    if (config.type) {
      ToastHelper.promise(
        dispatch(deleteFileApiCall(config.code)),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(deleteFolderApiCall(config.code)),
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
            <div onClick={deleteForever}>
              <i className="fa fa-trash" />
              Delete Forever
            </div>
          </li>
        ) : (
          <li>
            <div onClick={moveToTrash}>
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