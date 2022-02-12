import React from "react";
import Chart from "../../charts/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../widgetsSm/WidgetSm";
import WidgetLg from "../../widgetsLg/WidgetLg";

const Home = () => {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart
				data={userData}
				title="User Analytics"
				grid
				dataKey="Active User"
			/>
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
};

export default Home;
