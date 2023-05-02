
import React from 'react'
import { useNavigate } from 'react-router';
import { PATH_AUTH } from '../../routes/paths';
import useAuth from '../../hooks/useAuth';

function UserProfileDropdown() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const signOut = () => {
    logout();
    navigate(PATH_AUTH.login);
  }
  return (
    <>
      <li className="dropdown user user-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <img src={user.avatar ? user.avatar : '/assets/img/user/no_user.jpg'} className="user-image" alt="user-image-2" />
          <span className="hidden-xs">{user.name}</span>
        </a>
        <ul className="dropdown-menu">
          {/* User image */}
          <li className="user-header">
            <img src={user.avatar ? user.avatar : '/assets/img/user/no_user.jpg'} className="img-circle" alt="user-image-3" />
            <p>
              {user.name}
              <small>{user.email}</small>
            </p>
          </li>
          <li className="user-footer">
            <div className="pull-left">
              <a href="#" onClick={() => navigate('/profile')} className="btn btn-default btn-flat">
                Profile
              </a>
            </div>
            <div className="pull-right">
              <a href="#" onClick={signOut} className="btn btn-default btn-flat">
                Sign out
              </a>
            </div>
          </li>
        </ul>
      </li>
    </>
  )
}

export default UserProfileDropdown;