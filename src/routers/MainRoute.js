import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({
	layout: Layout,
	component: Component,
	...rest
}) => (
	<Route
		{...rest}
		render={props =>
			(localStorage.getItem("user_token") !== null && localStorage.getItem("user_token") !== undefined) ?
				<Layout>
					<Component {...props} />
				</Layout>
				: (
					<Redirect to="/" />
				)
		}
	/>
);

const mapStateToProps = state => ({

});
export default connect(mapStateToProps)(ProtectedRoute);
