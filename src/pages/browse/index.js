import FileItem from '../../components/file-item';
import FolderItem from '../../components/folder-item';

export default function Browse() {
  document.title = 'Browse - ESpace';
  return (
    <>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>My Space</h1>
      </section>
      <section className="content">
        Folders
        <br />
        <br />
        <div className="row">
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
          <FolderItem />
        </div>
        Files
        <br />
        <br />
        <div className="row">
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
        </div>
      </section>
    </>
  );
}
