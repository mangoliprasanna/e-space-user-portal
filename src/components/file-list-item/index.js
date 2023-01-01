import React, { useEffect, useState } from 'react';
import getIconFromType from '../../utils/typeToIcon.utils';
import DropdownOptions from '../dropdown';
import '../style.css'

const FileListItem = ({ config }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isActive, setActive] = useState(false);
  const [context, setContext] = React.useState(false);
  const [xYPosistion, setXyPosistion] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleMenuClick, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleMenuClick);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setContext(false);
    setScrollPosition(position);
  };

  const onContextMenu = (event) => {
    event.preventDefault();

    let pageY = event.pageY;
    if (pageY > window.innerHeight / 2) {
      pageY -= 200;
    }

    const positionChange = {
      x: event.pageX,
      y: pageY - scrollPosition,
    };

    setContext(false);
    setXyPosistion(positionChange);
    setContext(true);
  };

  const handleClick = (event) => {
    setActive(!isActive);
    setContext(false);
  };

  const handleMenuClick = () => {
    setContext(false);
  };

  return (
    <>
      <DropdownOptions
        position={xYPosistion}
        closeMenu={handleMenuClick}
        context={context}
        config={config}
      />

      <div
        className="col-lg-3 col-md-4 col-xs-6"
        onContextMenu={onContextMenu}
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
