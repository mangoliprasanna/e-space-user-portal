import React from 'react'
import { useDispatch } from 'react-redux';
import { updateFileApiCall, updateFolderApiCall } from '../../redux/reducers/storage.reducer';
import ToastHelper from '../../utils/toast.utils';

function RestoreItem({ closeMenu, config }) {
  const dispatch = useDispatch();
  const onClick = () => {
    const msg = `Item restored!!`;
    const error = `Unable to complete request!`;
    if(config.type) {
      ToastHelper.promise(
        dispatch(updateFileApiCall(config.code, { isTrash: false }, config)),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(updateFolderApiCall(config.code, { isTrash: false }, config)),
        msg,
        error
      );
    }
    
    closeMenu();
  };

  return (
    <>
      <li>
        <div onClick={onClick} >
          <i className={`fa fa-clock-o`} />
          Restore
        </div>
      </li>
    </>
  )
}

export default RestoreItem