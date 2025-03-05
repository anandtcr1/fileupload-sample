import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "../pages/Home";
import Loader from "../components/Loader";
import UploadComponent from "../pages/UploadComponent";
import TableComponent from "../pages/TableComponent";
import UserList from "../pages/UserList";
import EmployeeList from "../pages/EmployeeList";
// import UploadExcel from "../pages/UploadExcel";

// const Users = React.lazy(() => import("../pages/Users"));
// const AddUser = React.lazy(() => import("../pages/AddUser"));

const AppRoutes = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <h1>Excel Upload & Data Management</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/users">User List</Link> |
        <Link to="/employees">Employee List</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <UploadComponent />
              <TableComponent />
            </>
          }
        />
        <Route path="/users" element={<UserList />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
