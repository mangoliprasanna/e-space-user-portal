const getIconFromType = (type) => {
  if (!type) return 'fa fa-folder';
  switch (type) {
    case 'image/jpeg':
    case 'image/vnd.microsoft.icon':
    case 'image/gif':
    case 'image/bmp':
    case 'image/webp':
    case 'image/tiff':
    case 'image/svg+xml':
    case 'image/png':
      return 'fa fa-picture-o';
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'fa fa-file-excel-o';
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'fa fa-file-word-o';
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'fa fa-file-powerpoint-o';
    default:
      return 'fa fa-file-o';
  }
};

export default getIconFromType;
