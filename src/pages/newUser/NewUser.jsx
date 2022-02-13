import React from "react";
import "./newUser.css";

const NewUser = () => {
	return (
		<div className="newUser">
			<h1 className="newUserTitle">New User</h1>
			<form className="newUserForm">
				<div className="newUserItem">
					<label>Username</label>
					<input type="text" placeholder="john" />
				</div>
				<div className="newUserItem">
					<label>Full Name</label>
					<input type="text" placeholder="John Smith" />
				</div>
				<div className="newUserItem">
					<label>Email</label>
					<input type="email" placeholder="john@gmail.com" />
				</div>
				<div className="newUserItem">
					<label>Password</label>
					<input type="Password" placeholder="password" />
				</div>
				<div className="newUserItem">
					<label>Phone</label>
					<input type="text" placeholder="+1 123 456 78" />
				</div>
				<div className="newUserItem">
					<label>Address</label>
					<input type="text" placeholder="New York | USA" />
				</div>
				<div className="newUserItem">
					<label>Gender</label>
					<div className="newUserGender">
						<label for="male">Male</label>
						<input type="radio" id="male" value="male" />
						<label for="female">Female</label>
						<input type="radio" id="female" value="female" />
						<label for="other">Other</label>
						<input type="radio" id="other" value="other" />
					</div>
				</div>
				<div className="newUserItem">
					<label>Active</label>
					<select name="active" id="active" className="newUserSelect">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default NewUser;
