import React from "react";
import "./user.css";
import {
	LocationSearching,
	CalendarToday,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
} from "@mui/icons-material";

const User = () => {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<button className="userAddButton">Create</button>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt="User Img"
							className="userShowImg"
						/>
						<div className="userShowTopTitle">
							<span className="userShowUsername">Anna Becker</span>
							<span className="userShowUserTitle">Software Engineer</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon" />
							<span className="userShowInfoTitle">annabeck99</span>
						</div>
						<span className="userShowTitle">Contact Details</span>
						<div className="userShowInfo">
							<CalendarToday className="userShowIcon" />
							<span className="userShowInfoTitle">15-11-1998</span>
						</div>
						<div className="userShowInfo">
							<PhoneAndroid className="userShowIcon" />
							<span className="userShowInfoTitle">+92 31502312</span>
						</div>
						<div className="userShowInfo">
							<MailOutline className="userShowIcon" />
							<span className="userShowInfoTitle">annabeck99@gmail.com</span>
						</div>
						<div className="userShowInfo">
							<LocationSearching className="userShowIcon" />
							<span className="userShowInfoTitle">New York | USA</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Full name</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateRight"></div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
