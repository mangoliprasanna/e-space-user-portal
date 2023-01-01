import React from 'react'
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../../redux/reducers/browser.reducer';

function StarItem({ closeMenu, config }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setSelectedItem(config));
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