import { Outlet } from 'react-router';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../redux/reducers/customization.reducer';
import Header from './header';

import NavigationMenu from './navigation-menu';

import InfoMenu from './info-menu';
import GlobalModal from './modal';
import config from '../config';


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(config.drawerWidth - 20),
    width: `calc(100% - ${config.drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${config.drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${config.drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));

export default function DashboardLayout() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch(setMenu({ opened: !leftDrawerOpened }));

  };
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
