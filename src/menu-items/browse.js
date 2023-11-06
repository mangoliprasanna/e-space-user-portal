
import { IconCloudDataConnection, IconStar, IconTrash } from '@tabler/icons';

const icons = { IconCloudDataConnection, IconStar, IconTrash };

const dashboard = {
  id: 'browse',
  type: 'group',
  title: 'Browse',
  children: [
    {
      id: 'storage',
      title: 'My Space',
      type: 'item',
      url: '/browse',
      icon: icons.IconCloudDataConnection,
      breadcrumbs: false
    },
    {
      id: 'starred',
      title: 'Starred',
      type: 'item',
      url: '/browse/stared',
      icon: icons.IconStar,
      breadcrumbs: false
    },
    {
      id: 'trash',
      title: 'Trash',
      type: 'item',
      url: '/browse/trashed',
      icon: icons.IconTrash,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
