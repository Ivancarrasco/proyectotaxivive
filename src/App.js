import React from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Topbar from './components/Topbar/Topbar';
import Home from './screens/Home/Home';
import Ruta from './screens/Ruta/Ruta';



export default withRouter(
	class App extends React.PureComponent {
		render() {
			return (
				<div>	
					  <Topbar />
					<Switch>
						<RouteWithTitle exact title="Home" path="/Home" component={Home} />
						<RouteWithTitle exact title="Ruta" path="/ruta" component={Ruta} />
						<Redirect to={'/inicio'} />
	            	</Switch>
					
					
				</div>


			);
		}
	}
);

export const RouteWithTitle = ({ title, render, component: Comp, ...props }) => (
	<Route {...props} render={(p) => <DocumentTitle title={title}>{render ? render(p) : <Comp {...p} />}</DocumentTitle>} />
);