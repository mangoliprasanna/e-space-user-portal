import { Outlet } from 'react-router';

import Header from './header';

import NavigationMenu from './navigation-menu';

import Footer from './footer';
import InfoMenu from './info-menu';

export default function DashboardLayout() {
  document.body.className = 'skin-black-light sidebar-mini';
  return (
    <div>
      <div className="wrapper">
        {/* top fixed header */}
        <Header />
        {/* Left side column. contains the sidebar */}
        <NavigationMenu />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          <Outlet />
          <InfoMenu />
        </div>

        {/* fixed footer */}
        <Footer />
      </div>
    </div>
  );
}
