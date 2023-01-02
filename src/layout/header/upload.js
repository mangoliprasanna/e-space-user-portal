import React from 'react'

function UploadFileButton() {
  const handleOnChange = (e) => {
    console.log(e.target.files);
  };
  return (
    <>

      <label htmlFor="upload-btn" type="button" aria-label='upload-btn' className="btn btn-block btn-success upload-btn">
        <span className="buttonIcon">
          <i className="fa fa-upload" />
        </span>
        <span className="buttonTxt">
          Upload
          <input
            onChange={handleOnChange}
            type="file"
            id="upload-btn"
            multiple
          />
        </span>
      </label>
    </>
  )
}

export default UploadFileButton