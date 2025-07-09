import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSignOutAlt, FaInfoCircle, FaUserCog, FaClipboardList, FaEnvelope, FaShieldAlt, FaGavel } from "react-icons/fa";
import "./Help.css";

const Help = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <div className="settings-container">
      <h2><FaUserCog /> Help & Settings</h2>

      <div className="help-section">
        <h3><FaInfoCircle /> What is this Application?</h3>
        <blockquote class="blockquote">
  <p class="mb-0">This admin panel allows you to manage staff details, view employee profiles, and perform HR-related tasks with ease.</p>
  <footer class="blockquote-footer mt-2">Admin Panel Overview</footer>
</blockquote>
        <p>
          This is a simple <strong>Admin Panel</strong> made using React. It helps you manage employee information easily:
        </p>
        <ul>
          <li><FaClipboardList /> Add new employee details</li>
          <li><FaClipboardList /> Edit or update staff info</li>
          <li><FaClipboardList /> Delete staff records</li>
          <li><FaClipboardList /> View staff data in table format</li>
          <li><FaClipboardList /> Data is saved locally using <code>localStorage</code></li>
        </ul>

        <h3><FaUserCog /> How to Use?</h3>
        <ul>
          <li><FaArrowLeft /> Go to <strong>Dashboard</strong> to start</li>
          <li><FaClipboardList /> Use <strong>Add Staff</strong> to create a record</li>
          <li><FaClipboardList /> Use <strong>Staff List</strong> to view or edit entries</li>
          <li><FaClipboardList /> Use <strong>Edit Profile</strong> for editing a staff member</li>
        </ul>

        <h3><FaEnvelope /> Need Help?</h3>
        <p>
          If you face any issue, please contact your HR or email: <a href="mailto:raghuboominathan@gmail.com">
           
            raghuboominathan@gmail.com
            
            </a>
        </p>

        <h3><FaShieldAlt /> More</h3>
        <ul>
          <li><FaShieldAlt /> <a href="#">Privacy Policy</a></li>
          <li><FaGavel /> <a href="#">Terms of Service</a></li>
        </ul>
      </div>

      <div className="btn-group">
        <button className="btn back-btn" onClick={handleBack}>
          <FaArrowLeft /> Back to Dashboard
        </button>
        <button className="btn logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Help;
