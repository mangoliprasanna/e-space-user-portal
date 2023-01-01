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

export default function TableLayout({ files, folders }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody><tr>
            <th>Name</th>
            <th>Last modified</th>
            <th>Size</th>
            <th>Status</th>
            <th>Reason</th>
          </tr>
            <tr>
              <td>183</td>
              <td>John Doe</td>
              <td>11-7-2014</td>
              <td><span className="label label-success">Approved</span></td>
              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
            </tr>
            <tr>
              <td>219</td>
              <td>Alexander Pierce</td>
              <td>11-7-2014</td>
              <td><span className="label label-warning">Pending</span></td>
              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
            </tr>
            <tr>
              <td>657</td>
              <td>Bob Doe</td>
              <td>11-7-2014</td>
              <td><span className="label label-primary">Approved</span></td>
              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
            </tr>
            <tr>
              <td>175</td>
              <td>Mike Doe</td>
              <td>11-7-2014</td>
              <td><span className="label label-danger">Denied</span></td>
              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
            </tr>
          </tbody></table>
      </div>

    </>
  );
}
