import "./app.css";
import Home from "./components/pages/Home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";

function App() {
	return (
		<Router>
			<div className="App">
				<Topbar />
				<div className="container">
					<Sidebar />
					<Routes>
						<Route path="/">
							<Home />
						</Route>
						<Route path="/users">
							<UserList />
						</Route>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
