import React, { useState } from "react";
import {
	LineStyle,
	Timeline,
	TrendingUp,
	Person,
	Inventory2,
	AttachMoney,
	BarChart,
	MailOutline,
	Feedback,
	ChatBubbleOutline,
	WorkOutline,
	Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleClass = () => {
		setIsActive(!isActive);
		return "active";
	};

	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li
								className={`sidebarListItem  + ${!isActive}`}
								onClick={() => toggleClass()}>
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUp className="sidebarIcon" />
							Sales
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/users" className="link">
							<li className="sidebarListItem ">
								<Person className="sidebarIcon" />
								Users
							</li>
						</Link>
						<Link to="/products" className="link">
							<li className="sidebarListItem">
								<Inventory2 className="sidebarIcon" />
								Products
							</li>
						</Link>
						<li className="sidebarListItem">
							<AttachMoney className="sidebarIcon" />
							Transactions
						</li>
						<li className="sidebarListItem">
							<BarChart className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Notifications</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem ">
							<MailOutline className="sidebarIcon" />
							Mail
						</li>
						<li className="sidebarListItem">
							<Feedback className="sidebarIcon" />
							Feedback
						</li>
						<li className="sidebarListItem">
							<ChatBubbleOutline className="sidebarIcon" />
							Messages
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem ">
							<WorkOutline className="sidebarIcon" />
							Manage
						</li>
						<li className="sidebarListItem">
							<LineStyle className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<Report className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
