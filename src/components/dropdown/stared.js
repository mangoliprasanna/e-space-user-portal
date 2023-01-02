import React from 'react'
import { useDispatch } from 'react-redux';
import { updateFileApiCall, updateFolderApiCall } from '../../redux/reducers/storage.reducer';
import ToastHelper from '../../utils/toast.utils';

function StarItem({ closeMenu, config }) {
  const dispatch = useDispatch();
  const onClick = () => {
    const msg = `${config.isStared ? 'Removed from' : "Added to"} Starred`;
    const error = `Unable to complete request!`;
    if (config.type) {
      ToastHelper.promise(
        dispatch(updateFileApiCall(config.code, { isStared: !config.isStared })),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(updateFolderApiCall(config.code, { isStared: !config.isStared })),
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
          <i className={`fa ${config.isStared ? 'fa-star' : 'fa-star-o'}`} />
          {config.isStared ? 'Remove Starred' : 'Add Starred'}
        </div>
      </li>
    </>
  )
}

export default StarItem