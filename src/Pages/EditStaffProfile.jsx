import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const { id } = useParams();
  const storedData = JSON.parse(localStorage.getItem("staffs")) || [];
const staff = storedData.find((s) => s.id === Number(id));

const navigate = useNavigate();

  if (!staff) return <h2>Employee Not Found</h2>;

  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({ ...staff });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // Load existing data
  const stored = JSON.parse(localStorage.getItem("staffs")) || [];

  // Replace the staff with the updated one
  const updated = stored.map((s) => (s.id === formData.id ? formData : s));

  // Save it back to localStorage
  localStorage.setItem("staffs", JSON.stringify(updated));

  alert("Profile updated successfully!");
  navigate(-1); // go back to previous page
};


  return (
    <div className="edit-profile">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="tab-buttons">
        <button
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={activeTab === "related" ? "active" : ""}
          onClick={() => setActiveTab("related")}
        >
          Related Info
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="form-fields">
            {activeTab === "profile" && (
              <div className="form-grid">
                <label>Staff Code<input name="staffCode" value={formData.staffCode} onChange={handleChange} /></label>
                <label>Name<input name="name" value={formData.name} onChange={handleChange} /></label>
                <label>Email<input name="email" value={formData.email} onChange={handleChange} /></label>
                <label>Phone<input name="phone" value={formData.phone} onChange={handleChange} /></label>
                
                <label>
                  Gender
                  <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label>
                  Birthday
                  <input
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                  />
                </label>

                <label>Workplace<input name="workplace" value={formData.workplace} onChange={handleChange} /></label>
                <label>Status<input name="status" value={formData.status} onChange={handleChange} /></label>
                <label>Job Position<input name="jobPosition" value={formData.jobPosition} onChange={handleChange} /></label>
                <label>Role<input name="role" value={formData.role} onChange={handleChange} /></label>

                <label>
                  Academic Level
                  <select name="academicLevel" value={formData.academicLevel} onChange={handleChange}>
                    <option value="">Select Academic Level</option>
                    <option value="High School">High School</option>
                    <option value="Associate's Degree">Associate's Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                </label>

                <label>Hourly Rate<input name="hourlyRate" value={formData.hourlyRate} onChange={handleChange} /></label>
              </div>
            )}

            {activeTab === "related" && (
              <div className="form-grid">
                <label>
                  Marital Status
                  <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                    <option value="">Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </label>

                <label>Current Address<input name="currentAddress" value={formData.currentAddress} onChange={handleChange} /></label>
                <label>Nation<input name="nation" value={formData.nation} onChange={handleChange} /></label>
                <label>Place of Birth<input name="birthPlace" value={formData.birthPlace} onChange={handleChange} /></label>
                <label>Religion<input name="religion" value={formData.religion} onChange={handleChange} /></label>
                <label>Citizen ID<input name="citizenId" value={formData.citizenId} onChange={handleChange} /></label>
                <label>Date of Issue<input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} /></label>
                <label>Bank Name<input name="bankName" value={formData.bankName} onChange={handleChange} /></label>
                <label>Bank Account No.<input name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} /></label>
                <label>Bank Account Name<input name="bankAccountName" value={formData.bankAccountName} onChange={handleChange} /></label>
                <label>Tax Code<input name="taxCode" value={formData.taxCode} onChange={handleChange} /></label>
              </div>
            )}

            <button type="submit" className="save-btn">Save</button>
          </div>

          <div className="profile-aside">
            <img
              className="profile-avatar"
              src="https://via.placeholder.com/120"
              alt="Avatar"
            />
            <h3>{formData.name}</h3>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
