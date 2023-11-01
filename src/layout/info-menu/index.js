import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { formatBytes } from '../../utils/upload.utils';
import { infoMenuItem } from '../../redux/reducers/browser.reducer';
import getIconFromType, { getTypeFromMime } from '../../utils/typeToIcon.utils';
import EmptyMenu from './empty.info-menu';
import './style.css';

const InfoChild = ({ display, data }) => {
  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <b>{display}</b><br />
        {data}
      </div>
    </>
  )
}

const formatDate = (date) => format(new Date(date), 'MMM dd, yyyy');

const GeneralDetails = ({ config }) => {
  const isFile = config.type;
  const Size = isFile ? <InfoChild display='Size' data={formatBytes(config.size)} /> : <></>;
  const Type = isFile ? <InfoChild display='Type' data={getTypeFromMime(config?.type)} /> : <></>;
  const Created = <InfoChild display='Created' data={formatDate(config.createdAt)} />;
  const Modified = <InfoChild display='Modified' data={formatDate(config.updatedAt)} />;
  return (
    <>
      <div className="info-menu-body">
        <i className={`${getIconFromType(config?.type)} info-menu-object-icon`} aria-hidden="true" />
        <br />
        <p className='info-menu-title'>
          {config?.name}
        </p>
      </div>
      <hr className='info-menu-divider' />
      <div style={{ marginLeft: '16px' }}>
        {Type}
        {Size}
        {Created}
        {Modified}
      </div>
    </>
  )
}

export default function InfoMenu() {
  const item = useSelector(infoMenuItem);
  return (
    <>
      <aside className="control-sidebar control-sidebar-light info-menu">
        <a className='pull-right' href="#" data-toggle="control-sidebar">
          <i className="fa fa-close info-menu-close-icon" />
        </a>
        {!item ? <EmptyMenu /> : <></>}
        {item ? <GeneralDetails config={item} /> : <></>}

      </aside>
    </>
  );
}
