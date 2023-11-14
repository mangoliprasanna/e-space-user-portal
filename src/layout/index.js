import { Outlet } from 'react-router';
import Header from './header';

import NavigationMenu from './navigation-menu';

import InfoMenu from './info-menu';
import GlobalDialog from '../components/dialog';

export default function DashboardLayout() {

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
      </div>
    </div>
  );
}
