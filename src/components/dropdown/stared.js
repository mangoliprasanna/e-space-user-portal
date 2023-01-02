import React from 'react'
import { useDispatch } from 'react-redux';
import { updateFileApiCall, updateFolderApiCall } from '../../redux/reducers/storage.reducer';
import { setSelectedItem } from '../../redux/reducers/browser.reducer';

function StarItem({ closeMenu, config }) {
  const dispatch = useDispatch();
  const onClick = () => {
    if(config.type) {
      dispatch(updateFileApiCall(config.code, { isStared: !config.isStared }));
    } else {
      dispatch(updateFolderApiCall(config.code, { isStared: !config.isStared }));
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