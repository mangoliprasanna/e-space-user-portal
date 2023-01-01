import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { browse, currentFolderState, resetBrowser } from '../../redux/reducers/browser.reducer';
import SpinnerLoader from '../../components/spinner';

import './style.css';
import GridLayout from './grid.layout';
import TableLayout from './table.layout';
import EmptyLayout from './empty.layout';
import ErrorLayout from './error.layout';
import BrowserBreadcrum from './breadcrum';

export default function Browser() {
  document.title = `Browse - ESpace`;
  const [isGridView, setGridView] = useState(true);
  const { key = 'root' } = useParams();
  const dispatch = useDispatch();
  const { currentFolder, isLoading, isEmpty, hasError } = useSelector(currentFolderState);

  useEffect(() => {
    const fetchContent = () => {
      dispatch(browse(key));
    }
    fetchContent();
    return () => {
      dispatch(resetBrowser());
    }
  }, [key]);

  const gridLayout = <GridLayout files={currentFolder.files} folders={currentFolder.folders} />;
  const tableLayout = <TableLayout files={currentFolder.files} folders={currentFolder.folders} />;
  const content = isGridView === true ? gridLayout : gridLayout;

  return (
    <>
      <BrowserBreadcrum setGrid={setGridView} isGrid={isGridView} />
      <section className="content">
        {hasError === true ? <ErrorLayout /> : <></>}
        {isLoading === true ? <SpinnerLoader /> : <></>}
        {hasError !== true && isLoading === false && isEmpty === true ? <EmptyLayout /> : <></>}
        {isLoading === false && isEmpty === false ? content : <></>}
      </section>
    </>
  );
}
