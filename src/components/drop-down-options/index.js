import React from 'react'
import { Divider, Menu, Paper } from '@mui/material'
import GetLinkOption from './get-link'
import StarItem from './stared'
import RenameItem from './rename'
import ShareItem from './share'
import DetailsItem from './details'
import DownloadItem from './download'
import TrashItem from './trash'
import RestoreItem from './restore'
import DeleteForeverItem from './delete-forever'

function DropdownOptions({ contextMenu, handleClose, config }) {

  return (
    <>

      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        {
          !config.isTrash ?
            <>
              <Paper sx={{ width: 220, maxWidth: '100%' }}>
                <GetLinkOption config={config} handleClose={handleClose} />
                <StarItem config={config} handleClose={handleClose} />
                <RenameItem config={config} handleClose={handleClose} />
                <ShareItem config={config} handleClose={handleClose} />
                <Divider />
                <DetailsItem config={config} handleClose={handleClose} />
                <DownloadItem config={config} handleClose={handleClose} />
                <Divider />
                <TrashItem config={config} handleClose={handleClose} />
              </Paper>
            </>
            : <>
              <Paper sx={{ width: 220, maxWidth: '100%' }}>
                <RestoreItem config={config} handleClose={handleClose} />
                <Divider />
                <DeleteForeverItem config={config} handleClose={handleClose} />
              </Paper>
            </>
        }



      </Menu>
    </>
  )
}

export default DropdownOptions