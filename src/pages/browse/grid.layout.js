import FileListItem from '../../components/file-list-item';
import FolderListItem from '../../components/folder-list-item';

import './style.css';

const FolderView = ({ folders }) => {
  if (!folders || folders.length === 0) return <></>;
  return (
    <>
      <p className='object-item-title'>
        Folders
      </p>
      <div className='row'>
        {folders.map((e) => <FolderListItem config={e} />)}
      </div>

    </>
  )
}

const FileView = ({ files }) => {
  if (!files || files.length === 0) return <></>;
  return (
    <>
      <p className='object-item-title'>
        Files
      </p>
      <div className='row'>
        {files.map((e) => <FileListItem config={e} />)}
      </div>

    </>
  )
}

export default function GridLayout({ files, folders }) {
  return (
    <>
      <FolderView folders={folders} />
      <FileView files={files} />
    </>
  );
}
