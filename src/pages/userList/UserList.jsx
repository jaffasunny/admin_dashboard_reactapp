import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../components/dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const UserList = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		// this filter function returns every id except
		// the one that it matches with condition
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "user",
			headerName: "User",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="userListUser">
						<img
							className="userListImg"
							src={params.row.avatar}
							alt="User List Img"
						/>
						{params.row.username}
					</div>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "transaction",
			headerName: "Transaction Volume",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/user/" + params.row.id}>
							<button className="userListEdit">Edit</button>
						</Link>
						<DeleteOutline
							className="userListDelete"
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="userList">
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
			/>
			;
		</div>
	);
};

export default UserList;
