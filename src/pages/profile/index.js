import useAuth from "../../hooks/useAuth";

export default function UserProfile() {
  const { user } = useAuth();
  return (
    <>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>
          Profile
        </h1>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-3">
            <div className="box box-primary">
              <div className="box-body box-profile">
                <img className="profile-user-img img-responsive img-circle" src={user.avatar ? user.avatar : '/assets/img/user/no_user.jpg'} alt="User profile picture" />
                <h3 className="profile-username text-center">{user.name}</h3>
                <p className="text-muted text-center">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="nav-tabs-custom">
              <ul className="nav nav-tabs">
                <li className="active"><a href="#activity" data-toggle="tab">Profile</a></li>
                <li><a href="#timeline" data-toggle="tab">Password</a></li>
              </ul>
              <div className="tab-content">
                <div className="active tab-pane" id="activity">
                  <div className="post">
                    <div className="user-block">
                      <img className="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user image" />
                      <span className="username">
                        <a href="#">Jonathan Burke Jr.</a>
                        <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
                      </span>
                      <span className="description">Shared publicly - 7:30 PM today</span>
                    </div>
                    <p>
                      Lorem ipsum represents a long-held tradition for designers,
                      typographers and the like. Some people hate it and argue for
                      its demise, but others ignore the hate as they create awesome
                      tools to help create filler text for everyone from bacon lovers
                      to Charlie Sheen fans.
                    </p>
                    <ul className="list-inline">
                      <li><a href="#" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Share</a></li>
                      <li><a href="#" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5" /> Like</a>
                      </li>
                      <li className="pull-right">
                        <a href="#" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5" /> Comments
                          (5)</a></li>
                    </ul>
                    <input className="form-control input-sm" type="text" placeholder="Type a comment" />
                  </div>
                  <div className="post clearfix">
                    <div className="user-block">
                      <img className="img-circle img-bordered-sm" src="../../dist/img/user7-128x128.jpg" alt="User Image" />
                      <span className="username">
                        <a href="#">Sarah Ross</a>
                        <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
                      </span>
                      <span className="description">Sent you a message - 3 days ago</span>
                    </div>
                    <p>
                      Lorem ipsum represents a long-held tradition for designers,
                      typographers and the like. Some people hate it and argue for
                      its demise, but others ignore the hate as they create awesome
                      tools to help create filler text for everyone from bacon lovers
                      to Charlie Sheen fans.
                    </p>
                    <form className="form-horizontal">
                      <div className="form-group margin-bottom-none">
                        <div className="col-sm-9">
                          <input className="form-control input-sm" placeholder="Response" />
                        </div>
                        <div className="col-sm-3">
                          <button type="submit" className="btn btn-danger pull-right btn-block btn-sm">Send</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="post">
                    <div className="user-block">
                      <img className="img-circle img-bordered-sm" src="../../dist/img/user6-128x128.jpg" alt="User Image" />
                      <span className="username">
                        <a href="#">Adam Jones</a>
                        <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
                      </span>
                      <span className="description">Posted 5 photos - 5 days ago</span>
                    </div>
                    <div className="row margin-bottom">
                      <div className="col-sm-6">
                        <img className="img-responsive" src="../../dist/img/photo1.png" alt="Photo" />
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6">
                            <img className="img-responsive" src="../../dist/img/photo2.png" alt="Photo" />
                            <br />
                            <img className="img-responsive" src="../../dist/img/photo3.jpg" alt="Photo" />
                          </div>
                          <div className="col-sm-6">
                            <img className="img-responsive" src="../../dist/img/photo4.jpg" alt="Photo" />
                            <br />
                            <img className="img-responsive" src="../../dist/img/photo1.png" alt="Photo" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="list-inline">
                      <li><a href="#" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Share</a></li>
                      <li><a href="#" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5" /> Like</a>
                      </li>
                      <li className="pull-right">
                        <a href="#" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5" /> Comments
                          (5)</a></li>
                    </ul>
                    <input className="form-control input-sm" type="text" placeholder="Type a comment" />
                  </div>
                </div>
                <div className="tab-pane" id="timeline">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputName" placeholder="Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" placeholder="Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputExperience" className="col-sm-2 control-label">Experience</label>
                      <div className="col-sm-10">
                        <textarea className="form-control" id="inputExperience" placeholder="Experience" defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputSkills" className="col-sm-2 control-label">Skills</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-danger">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
