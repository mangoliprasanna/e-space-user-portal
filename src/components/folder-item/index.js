import React from 'react';
import DropdownOptions from '../dropdown';
import getIconFromType from '../../utils/typeToIcon.utils';
import './style.css';

const FolderItem = () => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="box box-solid">
          <div className="box-body">
            <div className="row">
              <div className="col-xs-2">
                <i className={`${getIconFromType('')} folderIcon`} aria-hidden="true" />
              </div>
              <div className="col-xs-8 folderTitle">
                Personal
              </div>
              <div className="col-xs-2">
                <DropdownOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(FolderItem);
