import React from 'react'
import { useDispatch } from 'react-redux';
import { hideModal, showModal } from '../../redux/reducers/modal.reducer';
import {
  deleteFileApiCall,
  deleteFolderApiCall,
  updateFileApiCall,
  updateFolderApiCall
} from '../../redux/reducers/storage.reducer';
import ToastHelper from '../../utils/toast.utils';


const DeleteForeverConfirmation = ({ type, code, closeModal }) => {
  const dispatch = useDispatch();
  const error = `Unable to complete request!`;
  const deleteForever = () => {
    const msg = `Item deleted!`;
    if (type) {
      ToastHelper.promise(
        dispatch(deleteFileApiCall(code)),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(deleteFolderApiCall(code)),
        msg,
        error
      );
    }
    closeModal();
  };

  return (
    <>
      <div>
        Item will be deleted forever and won't be able to restore it.
        <br />
        <br />
      </div>
      <div>
        <button type="button" onClick={closeModal} className="btn btn-default">Close</button>
        <button
          onClick={deleteForever}
          className="btn btn-danger pull-right">Delete forever</button>
      </div>
    </>
  )
};

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

  const closeModal = () => {
    dispatch(hideModal());
  };

  const deleteForever = () => {
    dispatch(showModal({
      title: 'Are you sure?',
      size: 'modal-sm',
      child: (
        <DeleteForeverConfirmation
          type={config.type}
          code={config.code}
          closeModal={closeModal} />
      )
    }))
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