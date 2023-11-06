
import { IconDashboard, IconCloudDataConnection, IconStar, IconTrash } from '@tabler/icons';

const icons = { IconDashboard, IconCloudDataConnection, IconStar, IconTrash };

const dashboard = {
  id: 'dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
