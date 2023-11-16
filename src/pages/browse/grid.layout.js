import { Grid, Typography } from '@mui/material';
import FileListItem from '../../components/file-list-item';
import FolderListItem from '../../components/folder-list-item';

import './style.css';

const FolderView = ({ folders }) => {
  if (!folders || folders.length === 0) return <></>;
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Folders
      </Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 9, md: 10 }}>
        {folders.map((e) => (
          <Grid item xs={2} sm={3} md={2} key={e}>
            <FolderListItem key={e} code={e} />
          </Grid>)
        )}
      </Grid>
    </>
  )
}

const FileView = ({ files }) => {
  if (!files || files.length === 0) return <></>;
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Files
      </Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 9, md: 10 }}>
        {files.map((e) => (
          <Grid item xs={2} sm={3} md={2} key={e}>
            <FileListItem key={e} code={e} />
          </Grid>)
        )}
      </Grid>
    </>
  )
}

export default function GridLayout({ files, folders }) {
  return (
    <>
      <FolderView folders={folders} />
      <br />
      <FileView files={files} />
    </>
  );
}
