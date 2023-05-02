
import NewFolderButton from "./new-folder";
import UserProfileDropdown from "./user-profile";

import './style.css';
import UploadFileButton from "./upload";
import UploadProgressDropdown from "./upload/upload-progress-dropdown";
import { AssetUtils } from "../../utils/assets.utils";

export default function Header() {
	return (
		<div>
			<header className="main-header">
				{/* Logo */}
				<a href="../../index2.html" className="logo">
					{/* mini logo for sidebar mini 50x50 pixels */}
					<span className="logo-mini">
						<img src={AssetUtils.brand.blackLogoIcon} alt='brand-logo' height="70px" />
					</span>
					{/* logo for regular state and mobile devices */}
					<span className="logo-lg">
						<img src={AssetUtils.brand.blackLogo} alt='brand-logo' height="70px" />
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
							<UploadProgressDropdown />
							<UserProfileDropdown />
						</ul>
					</div>
				</nav>
			</header>
		</div>
	);
}
