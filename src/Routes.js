import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from './components/Loading';
import { MainRoute } from './routers';

import { MainLayout } from './layout';

// Admin
const DashboardPage = lazy(() => import('./pages/Admin/Dashboard'));
const AddProductPage = lazy(() => import('./pages/Admin/AddProduct'));
const ProductPage = lazy(() => import('./pages/Admin/Product'));
const CustomersPage = lazy(() => import('./pages/Admin/Customers'));
const OrdersPage = lazy(() => import('./pages/Admin/Orders'));
const ViewOrdersListPage = lazy(() => import('./pages/Admin/ViewOrdersList'));
const ViewProductsListPage = lazy(() => import('./pages/Admin/ViewProductsList'));

// Register - Login
const Register = lazy(() => import('./pages/Public/Register'));
const Login = lazy(() => import('./pages/Public/Login'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />

          <MainRoute
            exact
            path="/admin/dashboard"
            layout={MainLayout}
            component={DashboardPage}
          />
          <MainRoute
            exact
            path="/admin/products/add"
            layout={MainLayout}
            component={AddProductPage}
          />
          <MainRoute
            exact
            path="/admin/products"
            layout={MainLayout}
            component={ProductPage}
          />
           <MainRoute
            exact
            path="/admin/products/list"
            layout={MainLayout}
            component={ViewProductsListPage}
          />
           <MainRoute
            exact
            path="/admin/customers"
            layout={MainLayout}
            component={CustomersPage}
          />
           <MainRoute
            exact
            path="/admin/orders"
            layout={MainLayout}
            component={OrdersPage}
          />
           <MainRoute
            exact
            path="/admin/orders/list"
            layout={MainLayout}
            component={ViewOrdersListPage}
          />
          <Route path="*" component={() => 'Development in progress...'} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
