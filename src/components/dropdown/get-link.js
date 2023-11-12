import React from 'react'
import { useDispatch } from 'react-redux';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ToastHelper from '../../utils/toast.utils';
import { hideModal, showModal } from '../../redux/reducers/modal.reducer';

const LinkAccessDialog = ({ config, closeModal }) => {
  const currentHost = `${window.location.protocol}//${window.location.hostname}`;
  const prefix = config.type ? 'file' : 'folder';
  const sharableLink = `${currentHost}/share/${prefix}/${config.code}`;
  const copyLinkToClipBoard = () => {

    navigator.clipboard.writeText(sharableLink);
    ToastHelper.success("Link copied to clipboard");
  }

  return (
    <>
      <div>
        <div className="box">
          <div className="box-body">
            <div className="user-block">
              <img className="img-circle" src="https://adminlte.io/themes/AdminLTE/dist/img/user1-128x128.jpg" alt="User Image" />
              <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
              <span className="description">Shared publicly - 7:30 PM Today</span>
            </div>
          </div>
        </div>
        <div>
          <br />
          <button type="button" className="btn btn-primary">
            <span className="buttonIcon">
              <i className="fa fa-link" />
            </span>
            <span className="buttonTxt" onClick={copyLinkToClipBoard}>
              Copy Link
            </span>
          </button>
          <button
            type='button'
            onClick={closeModal}
            className="btn btn-success pull-right">
            Done
          </button>
        </div>
      </div>
    </>
  )
};

function GetLink({ closeMenu, config }) {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(hideModal());
  }
  const onClick = () => {
    dispatch(showModal({
      title: `Share "${config.name}"`,
      size: 'modal-md',
      child: (
        <LinkAccessDialog
          config={config}
          closeModal={closeModal} />
      )

    }))
    closeMenu();
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={onClick}>
          <ListItemIcon>
            <InsertLinkIcon />
          </ListItemIcon>
          <ListItemText primary="Get Link" />
        </ListItemButton>
      </ListItem>
    </>
  )
}

export default GetLink