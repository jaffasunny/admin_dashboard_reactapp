import React from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

const WidgetSm = () => {
	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Joining Members</span>
			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img
						src="https://images.pexels.com/photos/8680111/pexels-photo-8680111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Widget Sm Img"
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						src="https://images.pexels.com/photos/8680111/pexels-photo-8680111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Widget Sm Img"
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						src="https://images.pexels.com/photos/8680111/pexels-photo-8680111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Widget Sm Img"
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
};

export default WidgetSm;
