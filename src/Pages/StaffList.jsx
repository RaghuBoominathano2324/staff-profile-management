import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import staffData from "../assets/EmployeeData";
import "./StaffList.css";

function StaffList() {
  const [staffs, setStaffs] = useState(() => {
  const stored = localStorage.getItem("staffs");
  return stored ? JSON.parse(stored) : staffData;
});

  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`/dashboard/edit/${id}`);
  }

  function handleDelete(id) {
  const confirmed = window.confirm("Are you sure you want to delete this staff?");
  if (confirmed) {
    const updated = staffs.filter((staff) => staff.id !== id);
    setStaffs(updated);
    localStorage.setItem("staffs", JSON.stringify(updated)); // update localStorage
  }
}


  function handleView(id) {
    navigate(`/dashboard/profile/${id}`);
  }

function handleDeleteAll() {
  const confirmed = window.confirm("Are you sure you want to delete all employee data?");
  if (confirmed) {
    setStaffs([]);
    localStorage.removeItem("staffs"); // clear from localStorage
  }
}


  return (
    <div className="staff-container">
      <h2>Staff List</h2>

      {/* Delete All Button */}
      <div className="delete-all-container">
        <button className="delete-all-btn" onClick={handleDeleteAll}>
          <FontAwesomeIcon icon={faTrash} />
          Delete All
        </button>
      </div>

      <table className="staff-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((staff) => (
            <tr key={staff.id} className="staff-row">
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.email}</td>
              <td>{staff.role}</td>
              <td className="actions-cell">
                <button
                  className="view-btn"
                  onClick={() => handleView(staff.id)}
                  title="View Profile">
                  View <FontAwesomeIcon icon={faEye} />
                </button>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(staff.id)}
                  title="Edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(staff.id)}
                  title="Delete">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
          {staffs.length === 0 && (
            <tr>
              <td colSpan="5" className="no-data">
                No staff available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StaffList;
