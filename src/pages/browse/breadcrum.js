import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { objectByCode } from '../../redux/reducers/object.reducer'
import { browserStack, browserStackPop } from '../../redux/reducers/browser.reducer'
import { PATH_DASHBOARD } from '../../routes/paths'



const BreadCrumChild = ({ code, isLast }) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const config = useSelector(state => objectByCode(code, state));

  const onClick = () => {
    dispatch(browserStackPop(code));
    if (code === 'root') return navigate(PATH_DASHBOARD.browse);
    return navigate(PATH_DASHBOARD.browseFolder(code));
  };

  return (
    <>
      <li className={`${isLast === true ? 'active' : ''}`}>
        {
          isLast ? config?.name || 'My Space' : (<a onClick={onClick}>{config?.name || 'My Space'}</a>)
        }
      </li>
    </>
  )
}

function BrowserBreadcrum({ setGrid, isGrid }) {
  const stack = useSelector(browserStack);
  return (
    <>
      <ol className="breadcrumb">
        {stack.map((e, index) => {
          const isLast = stack.length - 1 === index;
          return (
            <BreadCrumChild code={e} isLast={isLast} key={`breadcum_${index}`} />
          )
        })}
        <div className='pull-right browser-view-switcher' onClick={() => setGrid(!isGrid)}>
          {
            isGrid ? <i className="fa fa-th" aria-hidden="true" />
              : <i className="fa fa-table" aria-hidden="true" />
          }
        </div>
      </ol>
    </>
  )
}

export default BrowserBreadcrum