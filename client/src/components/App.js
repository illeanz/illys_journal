import React from 'react';
import Input from './Input'
import EntryList from './EntryList'
import Header from "./Header";
import About from "./About";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

const App = () => {
	return (
		<Router>
		<div>
			<Header/>
			<Switch>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route path="/home">
					<Input/>
					<EntryList/>
				</Route>
				<Route path="/about">
					<About/>
				</Route>
			</Switch>
		</div>
		</Router>
	);
};

export default App;
