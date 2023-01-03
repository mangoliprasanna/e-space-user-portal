export const prepareFilesForUpload = (filesObject, code) => {
  const prepareForPush = {};
  Object.keys(filesObject).forEach((k) => {
    const file = filesObject[k];
    const id = `_${Math.floor(Math.random() * 10000)}_${(Math.random() + 1).toString(36).substring(2)}`;
    prepareForPush[id] = {
      file,
      code,
      isUploading: true,
      progress: 0,
    };
  });
  return prepareForPush;
}

export function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / k**i).toFixed(dm))} ${sizes[i]}`
}