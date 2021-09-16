import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContextProvider } from '../context';
import routes from '../constants/routes';
import Header from '../components/Header/';
import Footer from '../components/Footer/';
import '../styles/main.scss';

function App() {
	return (
		<ContextProvider>
			<React.Suspense fallback={<span>Loading...</span>}>
				<Router>
					<Header />
					<Switch>
						{Object.values(routes).map(({path, Component}, i) => {
							return <Route key={i} exact path={path}>
								<Component />
							</Route>
						})}
					</Switch>
					<Footer />
				</Router>
			</React.Suspense>
		</ContextProvider>
	);
}

export default App;