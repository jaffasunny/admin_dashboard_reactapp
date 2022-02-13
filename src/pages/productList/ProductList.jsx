import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { productRows } from "../../components/dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./productList.css";

const ProductList = () => {
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		// this filter function returns every id except
		// the one that it matches with condition
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "product",
			headerName: "Product",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img
							className="productListImg"
							src={params.row.img}
							alt="User List Img"
						/>
						{params.row.name}
					</div>
				);
			},
		},
		{ field: "stock", headerName: "Stock", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "price",
			headerName: "Price",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/product/" + params.row.id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline
							className="productListDelete"
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<DataGrid
				rows={productRows}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};

export default ProductList;
