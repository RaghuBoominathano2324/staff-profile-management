import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminProfile.css";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("profile");

  const profile = {
    name: "Ananya",
    email: "080-349499994",
    phone: "+91 90307 59006",
    university: "Oxford University",
    jobTitle: "HR Associate",
    gender: "Female",
    birthday: "12 Jul 1994",
    workplace: "Bengaluru Office",
    status: "Full-time",
    jobPosition: "Job Position",
    academicLevel: "B.Sc. Graduate",
    hourlyRate: "₹120.00",
    religion: "Hindu",
    nation: "India",
    maritalStatus: "Married",
    avatar: "",
  };

  const related = {
    citizenId: "Aadhar Card",
    issueDate: "03 May 2012",
    placeOfBirth: "Mumbai",
    address: "1/2, Half Rd, Fullfield, Wonder City, Bengaluru",
    bankAccNo: "2349 8756 4212",
    branch: "Nalurhalli Branch",
    bank: "State Bank of India",
    taxCode: "ABCD1234",
  };

  return (
    <div className="admin-container">
      <button className="back-btn" onClick={() => navigate("/dashboard")}>
        ← Back to Dashboard
      </button>

      <div className="profile-header">
        <img src={profile.avatar} alt="Profile" className="profile-avatar" />
        <h2>{profile.name}</h2>
        <p>{profile.jobTitle}</p>
      </div>

      {/* Tab buttons */}
      <div className="tab-buttons">
        <button onClick={() => setTab("profile")} className={tab === "profile" ? "active" : ""}>
          Profile Info
        </button>
        <button onClick={() => setTab("related")} className={tab === "related" ? "active" : ""}>
          Related Info
        </button>
      </div>

      {/* Content */}
      {tab === "profile" && (
        <div className="info-box">
          <h3>Profile Information</h3>
          <ul>
            <li><strong>Email:</strong> {profile.email}</li>
            <li><strong>Phone:</strong> {profile.phone}</li>
            <li><strong>University:</strong> {profile.university}</li>
            <li><strong>Gender:</strong> {profile.gender}</li>
            <li><strong>Birthday:</strong> {profile.birthday}</li>
            <li><strong>Workplace:</strong> {profile.workplace}</li>
            <li><strong>Status:</strong> {profile.status}</li>
            <li><strong>Job Position:</strong> {profile.jobPosition}</li>
            <li><strong>Academic Level:</strong> {profile.academicLevel}</li>
            <li><strong>Hourly Rate:</strong> {profile.hourlyRate}</li>
            <li><strong>Religion:</strong> {profile.religion}</li>
            <li><strong>Nation:</strong> {profile.nation}</li>
            <li><strong>Marital Status:</strong> {profile.maritalStatus}</li>
          </ul>
        </div>
      )}

      {tab === "related" && (
        <div className="info-box">
          <h3>Related Information</h3>
          <ul>
            <li><strong>Citizen ID:</strong> {related.citizenId}</li>
            <li><strong>Date of Issue:</strong> {related.issueDate}</li>
            <li><strong>Place of Birth:</strong> {related.placeOfBirth}</li>
            <li><strong>Address:</strong> {related.address}</li>
            <li><strong>Bank Account No:</strong> {related.bankAccNo}</li>
            <li><strong>Branch:</strong> {related.branch}</li>
            <li><strong>Bank:</strong> {related.bank}</li>
            <li><strong>Tax Code:</strong> {related.taxCode}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
