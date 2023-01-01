import React, { useEffect, useState } from 'react'
import DeleteItem from './delete'
import DownloadItem from './download'
import GetLink from './get-link'
import RenameItem from './rename'
import ShareItem from './share'
import StarItem from './stared'
import ViewDetails from './view-details'

function DropdownOptions({ config, context, setContext }) {

  const [scrollPosition, setScrollPosition] = useState(0);
  let xYPosistion = { x: 0, y: 0 };

  if (context) {
    let pageY = context.pageY;
    if (pageY > window.innerHeight / 2) {
      pageY -= 200;
    }

    xYPosistion = {
      x: context.pageX,
      y: pageY - scrollPosition,
    };
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', closeMenu, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', closeMenu);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setContext();
    setScrollPosition(position);
  };

  const closeMenu = () => {
    setContext();
  };



  return (
    <>
      {context ? <div
        style={{
          left: xYPosistion.x,
          top: xYPosistion.y,
        }}
        className='rightClick'>
        <ul className="object-dropdown-menu">
          <GetLink
            closeMenu={closeMenu}
            config={config} />
          <StarItem
            closeMenu={closeMenu}
            config={config} />
          <RenameItem
            closeMenu={closeMenu}
            config={config} />
          <ShareItem
            closeMenu={closeMenu}
            config={config} />
          <li className="divider" />
          <ViewDetails
            closeMenu={closeMenu}
            config={config} />
          <DownloadItem
            closeMenu={closeMenu}
            config={config} />
          <li className="divider" />
          <DeleteItem
            closeMenu={closeMenu}
            config={config} />
        </ul>
      </div> : <></>}
    </>
  )
}

export default DropdownOptions