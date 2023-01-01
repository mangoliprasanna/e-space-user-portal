import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { browse } from '../../redux/reducers/browser.reducer';
import SpinnerLoader from '../../components/spinner';

import './style.css';
import GridLayout from './grid.layout';
import TableLayout from './table.layout';
import EmptyLayout from './empty.layout';
import ErrorLayout from './error.layout';

const Header = ({ setGrid, isGrid }) => {
  return (
    <>
      <ol className="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Library</a></li>
        <li className="active">Data</li>
      </ol>
      <section className="content-header">
        <h1>
          My Space
          <div className='pull-right browser-view-switcher' onClick={() => setGrid(!isGrid)}>
            {
              isGrid ? <i className="fa fa-th" aria-hidden="true" />
                : <i className="fa fa-table" aria-hidden="true" />
            }

          </div>
        </h1>

      </section>
    </>
  )
}

export default function Browser() {
  document.title = 'Browse - ESpace';
  const [isGridView, setGridView] = useState(true);
  const { key = 'root' } = useParams();
  const dispatch = useDispatch();
  const browser = useSelector(state => state.browser);
  const isLoading = browser.isLoading;
  const isEmpty = browser.isEmpty;
  const hasError = browser.hasError;

  useEffect(() => {
    const fetchContent = () => {
      dispatch(browse(key));
    }
    fetchContent();
  }, [key]);

  const gridLayout = <GridLayout files={browser.files} folders={browser.folders} />;
  const tableLayout = <TableLayout files={browser.files} folders={browser.folders} />;
  const content = isGridView === true ? gridLayout : gridLayout;

  return (
    <>
      <Header setGrid={setGridView} isGrid={isGridView} />
      <section className="content">
        {hasError === true ? <ErrorLayout />  : <></>}
        {isLoading === true ? <SpinnerLoader /> : <></>}
        {hasError !== true && isLoading === false && isEmpty === true ? <EmptyLayout /> : <></>}
        {isLoading === false && isEmpty === false ? content : <></>}
      </section>
    </>
  );
}
