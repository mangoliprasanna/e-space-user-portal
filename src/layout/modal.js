import React from 'react'
import { useSelector } from 'react-redux'
import { modalState } from '../redux/reducers/modal.reducer'

export default function GlobalModal() {
  const { title, size, child, canShow } = useSelector(modalState)
  return (
    <>
      <div className="modal" style={{ display: canShow === true ? 'block' : 'none' }}>
        <div className={`modal-dialog ${ size || 'modal-sm' }`}>
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal-title">{title}</h4>
              <br />
              {child}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
