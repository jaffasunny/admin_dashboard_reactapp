import "./app.css";
import Home from "./components/pages/Home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";

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
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
