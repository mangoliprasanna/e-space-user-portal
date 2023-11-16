import React, { useState } from 'react';

import { Stack } from '@mui/system';
import { Card, Grid, IconButton, SvgIcon } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FolderIcon from '@mui/icons-material/Folder';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setSelectedItem } from '../../redux/reducers/browser.reducer';
import { objectByCode } from '../../redux/reducers/object.reducer';
import { PATH_DASHBOARD } from '../../routes/paths';
import getIconFromType from '../../utils/typeToIcon.utils';
import ItemOptionMenu from "../menu/item-options/index";
import '../style.css'
import { formatDate } from '../../utils/upload.utils';


const FolderListItem = ({ code }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const config = useSelector(state => objectByCode(code, state));
  const [context, setContext] = useState();

  const handleClick = () => {
    setContext();
    dispatch(setSelectedItem(code));
  };

  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX + 2,
          mouseY: event.clientY - 6,
        }
        : null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <>

      <div
        onContextMenu={handleContextMenu}
        onClick={handleClick}
        onDoubleClick={() => {
          if (!config.isTrash)
            navigate(PATH_DASHBOARD.browseFolder(config.code));
        }}
      >
        <Card className='card-item'>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <SvgIcon component={FolderIcon} style={{ fontSize: 50 }} />
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1}>
                {/* <IconButton>
                  <StarBorderIcon fontSize='small' />
                </IconButton> */}
                <IconButton onClick={handleContextMenu}>
                  <MoreVertIcon fontSize='small' />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>

          <div className="card-title">
            {(config.name || "").replaceAll('/', '')}
          </div>

          <MuiTypography variant="subtitle2" gutterBottom>
            {formatDate(config.createdAt)}
          </MuiTypography>

        </Card>
        
        <ItemOptionMenu handleClose={handleClose} contextMenu={contextMenu} config={config} />
      </div>
    </>
  );
};

export default React.memo(FolderListItem);
