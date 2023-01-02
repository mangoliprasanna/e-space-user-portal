import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import NewFolderButton from "./new-folder";

import './style.css';
import UploadFileButton from "./upload";

export default function Header() {
	const { user } = useAuth();
	const navigate = useNavigate();
	return (
		<div>
			<header className="main-header">
				{/* Logo */}
				<a href="../../index2.html" className="logo">
					{/* mini logo for sidebar mini 50x50 pixels */}
					<span className="logo-mini">
						<b>E</b>S
					</span>
					{/* logo for regular state and mobile devices */}
					<span className="logo-lg">
						<b>E</b> Space
					</span>
				</a>
				{/* Header Navbar: style can be found in header.less */}
				<nav className="navbar navbar-static-top">
					{/* Sidebar toggle button */}
					<a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</a>
					<div className="navbar-form navbar-left hidden-xs">
						<NewFolderButton />
					</div>
					<div className="navbar-form navbar-left hidden-xs pl-0">
						<UploadFileButton />
					</div>
					<div className="navbar-custom-menu">
						<ul className="nav navbar-nav">
							<li className="dropdown tasks-menu">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
									<span className="buttonIcon">
										<i className="fa fa-refresh fa-spin" />
									</span>
									Uploading item
								</a>
								<ul className="dropdown-menu">
									<li className="header">Uploading 7 items</li>
									<li>
										<ul className="menu">
											<li>
												<a href="#">
													<h3>
														Filename.jpg
														<small className="pull-right">30%</small>
													</h3>
													<div className="progress xs">
														<div className="progress-bar progress-bar-aqua" style={{ width: '10%' }}>
															<span className="sr-only">20% Complete</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="dropdown user user-menu">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<img src={user.avatar ? user.avatar : '/assets/img/user/no_user.jpg'} className="user-image" alt="user-image-2" />
									<span className="hidden-xs">{user.name}</span>
								</a>
								<ul className="dropdown-menu">
									{/* User image */}
									<li className="user-header">
										<img src={user.avatar ? user.avatar : '/assets/img/user/no_user.jpg'} className="img-circle" alt="user-image-3" />
										<p>
											{user.name}
											<small>{user.email}</small>
										</p>
									</li>
									{/* Menu Footer */}
									<li className="user-footer">
										<div className="pull-left">
											<a href="#" onClick={() => navigate('/profile')} className="btn btn-default btn-flat">
												Profile
											</a>
										</div>
										<div className="pull-right">
											<a href="#" className="btn btn-default btn-flat">
												Sign out
											</a>
										</div>
									</li>
								</ul>
							</li>
						</ul>


					</div>
				</nav>
			</header>
		</div>
	);
}
