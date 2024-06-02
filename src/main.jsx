import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/scss/index.scss";
// thư viện router dom giúp chia các component thành page
// import { BrowserRouter, Routes, Route, Navigate, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import HeaderHome from "./components/HeaderHome";
// import HomeTemplate from "./templates/HomeTemplate";
// import UserTemplate from "./templates/UserTemplate";
// import Profile from "./pages/Profile";
// import HistoryOrder from "./pages/HistoryOrder";
// import ChangePassword from "./pages/ChangePassword";
// import Page404 from "./pages/Page404";
// import ForgotPass from "./pages/ForgotPass";
// import FormComponent from "./pages/FormComponent/FormComponent";
// import FormikDemo from "./pages/FormComponent/FormikDemo";

//Setup Redux
import {store} from './redux/store'
import {Provider} from 'react-redux'
// import NumberState from "./pages/DemoRedux/NumberState";
// import ChatApp from "./pages/DemoRedux/ChatApp";
// import CartPage from "./pages/Carts/CartPage";
// import ProductList from "./pages/Products/ProductList";
// import TableListSinhVien from "./pages/QuanLySinhVien/TableListSinhVien";
// import FormSinhVien from "./pages/QuanLySinhVien/FormSinhVien";
// import DemoMountingComponent from "./pages/DemoUseEffect/DemoMountingComponent";
// import DemoUpdatingComponent from "./pages/DemoUseEffect/DemoUpdatingComponent";
// import DemoUnmountComponent from "./pages/DemoUseEffect/DemoUnmountComponent";
// import DemoUseCallback from "./pages/Demo_UseCallback_UseMemo/DemoUseCallback";
// import DemoUseMemo from "./pages/Demo_UseCallback_UseMemo/DemoUseMemo";
// import Detail_UseParam from "./pages/Detail_UseParam";
// import DemoUseMatch from "./pages/Hook_Router/DemoUseMatch";
// import DemoUseSearchParam from "./pages/Hook_Router/DemoUseSearchParam";
// import DemoUseRef from "./pages/Demo_UseCallback_UseMemo/DemoUseRef";

//Cấu hình biến để chuyển hướng trang
import {createBrowserHistory} from 'history'
import App from './App'

// import DemoAntd from "./components/DemoAntd";
// import AdminTemplate from "./templates/AdminTemplate";
// import UserList from "./pages/AdminUsers/UserList";
// import DetailUser from "./pages/AdminUsers/DetailUser";
// import CreateUser from "./pages/AdminUsers/CreateUser";

//Cài đặt react query
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
//Cài đặt react query devtool
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

// history tương tự navigate dùng để chuyển hướng trang ở một trang không phải component
export const historyRouter = createBrowserHistory();
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
  
  </Provider>
);

// để import nhanh: window xài ctrl+spacebar, Mac xài option+esc
