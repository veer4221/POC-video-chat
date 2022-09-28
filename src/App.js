import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/en" element={<Outlet />}>
            <Route path="" element={<Home />} />
            {/* <Route path="product" element={<Product />} />
            <Route path="DynamicTable" element={<DynamicTable />} />
            <Route path="productInfo/:id" element={<ProductInfo />} />
            <Route path="addProduct" element={<AddEditProduct />} />
            <Route path="UserList" element={<UserList />} />
            <Route path="Permissions/:id" element={<Permission />} />
            <Route path="PermissionList" element={<PermissionList />} />
            <Route path="AddRole" element={<AddRole />} />
            <Route path="cart" element={<Cart />} />
            <Route path="AssignPermission/:id" element={<AssignPermission />} /> */}
          </Route>
          <Route
            path="/"
            element={
              !localStorage.getItem("token") || true ? (
                <Outlet />
              ) : (
                <Navigate to="/en" replace />
              )
            }
          >
            <Route path="" element={<Outlet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
