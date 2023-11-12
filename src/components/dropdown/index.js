import React, { useEffect, useState } from 'react'
import { Card, List } from '@mui/material'
import DeleteItem from './delete'
import DownloadItem from './download'
import GetLink from './get-link'
import RenameItem from './rename'
import RestoreItem from './restore'
import ShareItem from './share'
import StarItem from './stared'
import ViewDetails from './view-details'

function DropdownOptions({ config, context, setContext }) {

  const [scrollPosition, setScrollPosition] = useState(0);
  let xYPosistion = { x: 0, y: 0 };

  if (context) {
    let { pageY } = context;
    if (pageY > window.innerHeight / 2 && !config.isTrash) {
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
      {context ?
        <Card sx={{ minWidth: 275 }} elevation={2} style={{
          left: xYPosistion.x,
          top: xYPosistion.y,
        }} className='rightClick'>
          <List>
            {
              !config.isTrash ?
                <>
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
                  <ViewDetails
                    closeMenu={closeMenu}
                    config={config} />
                  <DownloadItem
                    closeMenu={closeMenu}
                    config={config} />
                </>
                : <>
                  <RestoreItem
                    closeMenu={closeMenu}
                    config={config} />
                </>
            }
            <DeleteItem
              closeMenu={closeMenu}
              config={config} />
          </List>
        </Card>
        : <></>}
    </>
  )
}

export default DropdownOptions