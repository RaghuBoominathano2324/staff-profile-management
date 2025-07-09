import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import Login from "./Pages/Login";
import StaffList from "./Pages/StaffList";
import StaffProfile from "./Pages/StaffProfile";
import AdminProfile from "./Pages/AdminProfile";
import Help from "./Pages/Help";
import Add from "./Pages/Add";
import EditProfile from "./Pages/EditStaffProfile"

function App() {
  return (
  
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

     
        <Route path="/dashboard" element={<Dashboard />}>

          <Route index element={<Navigate to="staff" />} />{" "}
     
          <Route path="staff" element={<StaffList />} />
   
          <Route path="admin" element={<AdminProfile />} />
          <Route path="help" element={<Help />} />
          <Route path="add" element={<Add />} />
     
          <Route path="*" element={<Navigate to="staff" />} />
          <Route path="/dashboard/profile/:id" element={<StaffProfile />} />
           <Route path="/dashboard/edit/:id" element={<EditProfile />} />
        </Route>

        {/* Redirect any unknown paths outside dashboard to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

  );
}

export default App;
