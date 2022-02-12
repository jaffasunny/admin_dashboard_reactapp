import React from "react";
import Chart from "../../charts/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css";

const Home = () => {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart />
		</div>
	);
};

export default Home;
