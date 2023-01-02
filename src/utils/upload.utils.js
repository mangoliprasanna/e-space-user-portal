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