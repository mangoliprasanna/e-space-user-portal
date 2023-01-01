import React, { useEffect, useState } from 'react';
import getIconFromType from '../../utils/typeToIcon.utils';
import DropdownOptions from '../dropdown';
import '../style.css'

const FileListItem = ({ config }) => {

  const [isActive, setActive] = useState(false);
  const [context, setContext] = useState();

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContext(e);
  }

  const handleClick = (event) => {
    setContext();
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
