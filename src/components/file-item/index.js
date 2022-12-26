import React from 'react';
import getIconFromType from '../../utils/typeToIcon.utils';
import DropdownOptions from '../dropdown';
import './style.css';

const FileItem = () => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-xs-6">
        <div className="box box-solid">
          <div className="box-body">
            <div className="row">
              <div className="col-xs-2">
                <i className={`${getIconFromType('application/vnd.ms-excel')} fileIcon`} aria-hidden="true" />
              </div>
              <div className="col-xs-8 fileTitle">
                asdapsdpaskodpk asdk poaskd koad paoskd paskodp askd asdk psoakd paskod
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

export default React.memo(FileItem);
