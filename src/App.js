import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {
	return (
		<Router>
			<div className="App">
				<Topbar />
				<div className="container">
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/users" element={<UserList />} />
						<Route path="/user/:userId" element={<User />} />
						<Route path="/products" element={<ProductList />} />
						<Route path="/product/:productID" element={<Product />} />
						<Route path="/newProduct" element={<NewUser />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
