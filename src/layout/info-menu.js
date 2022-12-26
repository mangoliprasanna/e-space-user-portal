export default function InfoMenu() {
  return (
    <>
      <aside className="control-sidebar control-sidebar-light" style={{ height: '95%' }}>
        <div style={{ padding: '10px' }}>
          <div className="row">
            <div className="col-xs-2">icon</div>
            <div className="col-xs-7">name</div>
            <div className="col-xs-2">
              <a href="#" data-toggle="control-sidebar" style={{ padding: '10px' }}>
                <i className="fa fa-close" style={{ fontSize: '20px', color: 'black' }} />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
