import React from 'react'
import { useDispatch } from 'react-redux';
import { hideModal, showModal } from '../../../redux/reducers/modal.reducer';
import RenameFileForm from './file.rename';
import RenameFolderForm from './folder.rename';

function RenameItem({ closeMenu, config }) {
  const dispatch = useDispatch();
  const closeModel = () => {
    dispatch(hideModal());
  };

  const openFolderRenameModel = () => {
    dispatch(showModal({
      title: 'Rename Folder',
      size: 'modal-sm',
      child: (
        <RenameFolderForm
          name={config.name}
          code={config.code}
          closeModel={closeModel} />
      )
    }))
  };

  const openFileRenameModel = () => {
    dispatch(showModal({
      title: 'Rename File',
      size: 'modal-sm',
      child: (
        <RenameFileForm
          name={config.name}
          code={config.code}
          closeModel={closeModel} />
      )
    }))
  };

  const openModel = () => {
    if (config.type) {
      openFileRenameModel();
    } else {
      openFolderRenameModel();
    }
  };

  return (
    <>
      <li>
        <div onClick={openModel}>
          <i className="fa fa-pencil" />
          Rename
        </div>
      </li>
    </>
  )
}

export default RenameItem