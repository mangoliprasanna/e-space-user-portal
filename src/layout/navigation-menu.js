
import React from 'react';

import { useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { PATH_DASHBOARD } from '../routes/paths';

export default function NavigationMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const checkIfActive = (path) => location.pathname === path ? 'active' : '';

  const redirectOnClick = (path) => navigate(path);

  return (
    <aside className="main-sidebar">
      {/* sidebar: style can be found in sidebar.less */}
      <section className="sidebar">
        {/* Sidebar user panel */}
        <div className="user-panel">
          <div className="pull-left image">
            <img src="/assets/img/user/no_user.jpg" className="img-circle" alt="user-image-4" />
          </div>
          <div className="pull-left info">
            <p>{user.name}</p>
            <a href="#">{user.email}</a>
          </div>
        </div>
        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Search anything.." />
            <span className="input-group-btn">
              <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                <i className="fa fa-search" />
              </button>
            </span>
          </div>
        </form>

        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">Navigation</li>
          <li className={checkIfActive(PATH_DASHBOARD.dashboard)}>
            <a href="#" onClick={() => redirectOnClick(PATH_DASHBOARD.dashboard)}>
              <i className="fa fa-dashboard" /> <span>Dashboard</span>
            </a>
          </li>
          <li className={checkIfActive(PATH_DASHBOARD.browse)}>
            <a href="#" onClick={() => redirectOnClick(PATH_DASHBOARD.browse)}>
              <i className="fa fa-server" /> <span>Storage</span>
            </a>
          </li>
          <li >
            <a href="#">
              <i className="fa fa-clock-o" /> <span>Recent</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-star" /> <span>Starred</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-trash" /> <span>Trash</span>
            </a>
          </li>
          <li className="header">Information</li>
          <li>
            <a href="#">
              <i className="fa fa-info-circle" /> <span>Help</span>
            </a>
          </li>
        </ul>
      </section>

    </aside>
  );
}
