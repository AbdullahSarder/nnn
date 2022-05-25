import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowBackIosNewOutlined from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Sidenav = () => {
	return (
		<div id="navbar" className="navbar">
			<img
				id="cross-btn"
				className="icons toogleicon"
				onclick="Crossbtn()"
				src="./Icon/cross.svg"
				alt=""
			/>
			<div>
				<img
					className="logo"
					src="/public/images/nested_academy_logo.png"
					alt=""
				/>
			</div>
			<div className="side-nav-list">
				<a href="a">
					<img src="./Icon/user.svg" alt="" />
					<span>My Profile</span>
				</a>
				<a href="a">
					<img src="./Icon/progress.svg" alt="" />
					<span>My Progress</span>
				</a>
				<a className="active" href="a">
					<img src="./Icon/projects.svg" alt="" />
					<span>Projects</span>
				</a>
				<a href="aa">
					<img src="./Icon/settings.svg" alt="" />
					<span>Settings</span>
				</a>
				<a href="aa">
					<img src="./Icon/help.svg" alt="" />
					<span>Help & Support</span>
				</a>
			</div>
		</div>
	);
};

export default Sidenav;
