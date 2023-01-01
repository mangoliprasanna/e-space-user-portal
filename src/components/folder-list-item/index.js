import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { PATH_DASHBOARD } from '../../routes/paths';
import getIconFromType from '../../utils/typeToIcon.utils';
import DropdownOptions from '../dropdown';
import '../style.css'

const FolderListItem = ({ config }) => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const [context, setContext] = useState();

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContext(e);
  }

  const handleClick = () => {
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
        onDoubleClick={() => {
          navigate(PATH_DASHBOARD.browseFolder(config.code));
        }}
        onClick={handleClick} >
        <div className={`object-list-item-box`}>
          <div className="row">
            <div className="col-xs-2">
              <i className={`${getIconFromType('')} objectIcon`} aria-hidden="true" />
            </div>
            <div className="col-xs-9 objectTitle">
              {(config.name || "").replaceAll('/', '')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(FolderListItem);
