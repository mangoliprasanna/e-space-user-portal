import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedItem } from '../../redux/reducers/browser.reducer';
import { objectByCode } from '../../redux/reducers/object.reducer';
import getIconFromType from '../../utils/typeToIcon.utils';
import DropdownOptions from '../dropdown';
import '../style.css'

const FileListItem = ({ code }) => {
  const dispatch = useDispatch();
  const config = useSelector(state => objectByCode(code, state));
  const [context, setContext] = useState();

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContext(e);
  }

  const handleClick = (event) => {
    setContext();
    dispatch(setSelectedItem(code));
  };

  return (
    <>
      <DropdownOptions
        context={context}
        setContext={setContext}
        config={config}
      />

      <div
        className="col-lg-3 col-md-4 col-xs-6"
        onContextMenu={handleContextMenu}
        onClick={handleClick} >
        <div className={`object-list-item-box`}>
          <div className="row">
            <div className="col-xs-2">
              <i className={`${getIconFromType(config.type)} objectIcon`} aria-hidden="true" />
            </div>
            <div className="col-xs-9 objectTitle">
              {config.name}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(FileListItem);
