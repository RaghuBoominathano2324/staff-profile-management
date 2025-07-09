import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FaEnvelope, FaPhoneAlt, FaGraduationCap, FaBriefcase, FaVenusMars, 
  FaBirthdayCake, FaUniversity, FaMapMarkerAlt, FaUser, FaUsers, FaMoneyBillAlt, 
  FaPrayingHands, FaFlag, FaUserShield, FaIdCard, FaCalendarAlt, FaHome, 
   FaFileInvoiceDollar, FaArrowLeft 
} from "react-icons/fa";

import "./StaffProfile.css";

function StaffProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const storedData = JSON.parse(localStorage.getItem("staffs")) || [];
  const staff = storedData.find((s) => s.id === id || s.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("profile");

  if (!staff) return <h2>Employee not found</h2>;

  return (
    <div className="profile-wrapper">
      <button className="back-btn" onClick={() => navigate("/dashboard")}>
        <FaArrowLeft /> Back to Dashboard
      </button>

      {/* LEFT: Avatar & Info */}
      <div className="left-panel">
        <div className="avatar"></div>
        <h3>{staff.name}</h3>

        <div className="basic-info">
          <p><FaEnvelope /> {staff.email}</p>
          <p><FaPhoneAlt /> {staff.phone}</p>
          <p><FaGraduationCap /> {staff.academicLevel}</p>
          <p><FaBriefcase /> {staff.jobPosition}</p>
        </div>

        <div className="manager-box">
          <p><strong>Direct manager:</strong></p>
          <div className="avatar-small"></div>
        </div>
      </div>

      {/* RIGHT: Tab Area */}
      <div className="right-panel">
        <div className="tabs">
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Profile Information
          </button>
          <button
            className={activeTab === "related" ? "active" : ""}
            onClick={() => setActiveTab("related")}
          >
            Related Information
          </button>
        </div>

        {activeTab === "profile" && (
          <>
            <h3><FaUser /> Profile Information</h3>
            <div className="info-grid">
              <p><strong>Staff Code:</strong> {staff.staffCode}</p>
              <p><strong>Name:</strong> {staff.name}</p>
              <p><FaVenusMars /> Gender: {staff.gender}</p>
              <p><FaBirthdayCake /> Birthday: {staff.birthday}</p>
              <p><FaPhoneAlt /> Phone: {staff.phone}</p>
              <p><FaUniversity /> Workplace: {staff.workplace}</p>
              <p><FaUsers /> Status: {staff.status}</p>
              <p><FaBriefcase /> Job Position: {staff.jobPosition}</p>
              <p><FaGraduationCap /> Academic Level: {staff.academicLevel}</p>
              <p><FaMoneyBillAlt /> Hourly Rate: {staff.hourlyRate}</p>
              <p><FaPrayingHands /> Religion: {staff.religion}</p>
              <p><FaFlag /> Nation: {staff.nation}</p>
              <p><FaUserShield /> Marital Status: {staff.maritalStatus}</p>
            </div>
          </>
        )}

        {activeTab === "related" && (
          <>
            <h3><FaIdCard /> Related Information</h3>
            <div className="info-grid">
              <p><FaIdCard /> Citizen ID: {staff.citizenId}</p>
              <p><FaCalendarAlt /> Date of Issue: {staff.issueDate}</p>
              <p><FaMapMarkerAlt /> Place of Birth: {staff.birthPlace}</p>
              <p><FaHome /> Address: {staff.currentAddress}</p>
              <p><FaFileInvoiceDollar /> Bank A/C No: {staff.bankAccountNumber}</p>
              <p><FaUniversity /> Bank Branch: {staff.bankAccountName}</p>
              <p> Bank Name: {staff.bankName}</p>
              <p><FaFileInvoiceDollar /> Tax Code: {staff.taxCode}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StaffProfile;
