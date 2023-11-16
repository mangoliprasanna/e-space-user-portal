import React from 'react';
import { Stack } from '@mui/system';
import { Avatar, AvatarGroup, Card, Grid, IconButton, SvgIcon } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { objectByCode } from '../../redux/reducers/object.reducer';
import getIconFromType from '../../utils/typeToIcon.utils';

import '../style.css';
import { formatBytes, formatDate } from '../../utils/upload.utils';
import ItemOptionMenu from "../menu/item-options/index";

const FileListItem = ({ code }) => {
  const dispatch = useDispatch();
  const config = useSelector(state => objectByCode(code, state));

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
      <div onContextMenu={handleContextMenu}>
        <Card className='card-item'>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <SvgIcon component={getIconFromType(config.type)} style={{ fontSize: 50 }} />
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
            {config.name}
          </div>

          <MuiTypography variant="subtitle2" gutterBottom>
            {formatBytes(config.size || 0)} - {formatDate(config.createdAt)}
          </MuiTypography>

        </Card>

        <ItemOptionMenu handleClose={handleClose} contextMenu={contextMenu} config={config} />
      </div>
    </>
  );
};

export default React.memo(FileListItem);
