import { Outlet } from 'react-router';

import Header from './header';

import NavigationMenu from './navigation-menu';

import InfoMenu from './info-menu';
import GlobalModal from './modal';

export default function DashboardLayout() {
  document.body.className = 'fixed skin-black-light sidebar-mini';
  return (
    <div>
      <div className="wrapper">
        {/* top fixed header */}
        <Header />
        {/* Left side column. contains the sidebar */}
        <NavigationMenu />

        <GlobalModal />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          <Outlet />
          <InfoMenu />
        </div>
      </div>
    </div>
  );
}
