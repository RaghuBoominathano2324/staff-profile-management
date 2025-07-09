import React, { useState } from 'react';
import './Add.css';

const initialForm = {
  staffCode: '', firstName: '', lastName: '', gender: '',
  birthday: '', email: '', phone: '', workplace: '', status: '',
  jobPosition: '', manager: '', role: '', academicLevel: '',
  hourlyRate: '', language: '', direction: '',
  // Related Info
  domicile: '', maritalStatus: '', currentAddress: '', nation: '',
  birthPlace: '', religion: '', citizenId: '', issueDate: '',
  placeOfIssue: '', resident: '', bankAccountNumber: '', bankAccountName: '',
  bankName: '', taxCode: '', epfNo: '', ssn: '', facebook: '',
  linkedin: '', skype: '',avatar: ''
};

const AddEmployee = () => {
  const [form, setForm] = useState(initialForm);
  const [tab, setTab] = useState('profile');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('staffs')) || [];
    localStorage.setItem('staffs', JSON.stringify([...stored, form]));
    alert('Staff profile saved!');
    setForm(initialForm);
  };

  return (
    <div className="form-container">
      <h2>Staff profile Create</h2>
      <div className="tabs">
        <button className={tab === 'profile' ? 'active' : ''} onClick={() => setTab('profile')}>Profile</button>
        <button className={tab === 'related' ? 'active' : ''} onClick={() => setTab('related')}>Related Information</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="avatar-upload">
  {form.avatar ? (
    <img src={form.avatar} alt="Avatar Preview" className="avatar-preview" />
  ) : (
    <div className="avatar-placeholder">No Photo</div>
  )}

  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({ ...prev, avatar: reader.result }));
      };
      if (file) reader.readAsDataURL(file);
    }}
  />
</div>

        {tab === 'profile' && (
          <div className="form-grid">
            <input name="staffCode" placeholder="Staff code *" value={form.staffCode} onChange={handleChange} />
            <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} />
            <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option><option>Female</option><option>Other</option>
            </select>
            <input name="birthday" type="date" value={form.birthday} onChange={handleChange} />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <input name="workplace" placeholder="Workplace" value={form.workplace} onChange={handleChange} />
            <input name="status" placeholder="Status" value={form.status} onChange={handleChange} />
            <input name="jobPosition" placeholder="Job position" value={form.jobPosition} onChange={handleChange} />
            <input name="manager" placeholder="Direct manager" value={form.manager} onChange={handleChange} />
            <input name="role" placeholder="Role" value={form.role} onChange={handleChange} />
            <input name="academicLevel" placeholder="Academic level" value={form.academicLevel} onChange={handleChange} />
            <input name="hourlyRate" placeholder="Hourly rate" value={form.hourlyRate} onChange={handleChange} />
            <input name="language" placeholder="Default Language" value={form.language} onChange={handleChange} />
            <input name="direction" placeholder="Direction" value={form.direction} onChange={handleChange} />
          </div>
        )}

        {tab === 'related' && (
          <div className="form-grid">
            <input name="domicile" placeholder="Domicile" value={form.domicile} onChange={handleChange} />
            <input name="maritalStatus" placeholder="Marital status" value={form.maritalStatus} onChange={handleChange} />
            <input name="currentAddress" placeholder="Current address" value={form.currentAddress} onChange={handleChange} />
            <input name="nation" placeholder="Nation" value={form.nation} onChange={handleChange} />
            <input name="birthPlace" placeholder="Place of birth" value={form.birthPlace} onChange={handleChange} />
            <input name="religion" placeholder="Religion" value={form.religion} onChange={handleChange} />
            <input name="citizenId" placeholder="Citizen ID" value={form.citizenId} onChange={handleChange} />
            <input name="issueDate" type="date" value={form.issueDate} onChange={handleChange} />
            <input name="placeOfIssue" placeholder="Place of issue" value={form.placeOfIssue} onChange={handleChange} />
            <input name="resident" placeholder="Resident" value={form.resident} onChange={handleChange} />
            <input name="bankAccountNumber" placeholder="Bank account number" value={form.bankAccountNumber} onChange={handleChange} />
            <input name="bankAccountName" placeholder="Bank account name" value={form.bankAccountName} onChange={handleChange} />
            <input name="bankName" placeholder="Bank name" value={form.bankName} onChange={handleChange} />
            <input name="taxCode" placeholder="Personal tax code" value={form.taxCode} onChange={handleChange} />
            <input name="epfNo" placeholder="EPF No" value={form.epfNo} onChange={handleChange} />
            <input name="ssn" placeholder="Social Security No" value={form.ssn} onChange={handleChange} />
            <input name="facebook" placeholder="Facebook" value={form.facebook} onChange={handleChange} />
            <input name="linkedin" placeholder="LinkedIn" value={form.linkedin} onChange={handleChange} />
            <input name="skype" placeholder="Skype" value={form.skype} onChange={handleChange} />
          </div>
        )}

        <div className="footer-buttons">
          <button type="button" onClick={() => setForm(initialForm)}>Close</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
