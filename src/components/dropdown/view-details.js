import React from 'react'
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../../redux/reducers/browser.reducer';

function ViewDetails({ closeMenu, config }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setSelectedItem(config.code));
    closeMenu();
  };

  return (
    <>
      <li data-toggle="control-sidebar">
        <div onClick={onClick} >
          <i className="fa fa-info-circle" />
          View Details
        </div>
      </li>
    </>
  )
}

export default ViewDetails