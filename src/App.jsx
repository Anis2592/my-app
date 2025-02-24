 import React, { useState } from "react";
import "./App.css";

const AddEmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        cellphone1: "",
        cellphone2: "",
        homephone: "",
        address: "",
        city: "",
        state: "",
        emailid: "",
        jobTitle: "",
        paymentMethod: "",
        language: "",
        paidVacationDays: "",
        paidSickDays: "",
        dateofbirth:"",
        dateofjoining:""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        console.log("Employee Added:", formData);
    };

    const handleDone = (e) => {
        e.preventDefault();
        console.log("Form Submission Completed:", formData);
    };

    return (
        <div className="form-container">
            <h2>Add Employee</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" required />
                </div>
                <div className="form-row gap">
                    <div className="form-group">
                        <label htmlFor="cellphone1">Cellphone 1</label>
                        <input type="tel" id="cellphone1" name="cellphone1" value={formData.cellphone1} onChange={handleChange} placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cellphone2">Cellphone 2</label>
                        <input type="tel" id="cellphone2" name="cellphone2" value={formData.cellphone2} onChange={handleChange} placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="homephone">Home Phone</label>
                        <input type="tel" id="homephone" name="homephone" value={formData.homephone} onChange={handleChange} placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address" />
                </div>
                <div className="form-row gap">
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Enter City" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <select id="state" name="state" value={formData.state} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="California">California</option>
                            <option value="Texas">Texas</option>
                            <option value="New York">New York</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="emailid">Email Id</label>
                    <input type="email" id="emailid" name="emailid" value={formData.emailid} onChange={handleChange} placeholder="Enter Email Id" required />
                </div>
                <div className="form-group">
                    <label htmlFor="jobTitle">Job Title</label>
                    <select id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Office Manager">Office Manager</option>
                        <option value="Secretary">Secretary</option>
                        <option value="Owner">Owner</option>
                        <option value="President">President</option>
                        <option value="Treasury">Treasury</option>
                        <option value="Vice President">Vice President</option>
                        <option value="CEO">CEO</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Direct Deposit">Direct Deposit</option>
                        <option value="Check">Check</option>
                        <option value="Cash">Cash</option>
                    </select>
                </div>
                <div className="form-row gap">
    <div className="form-group">
        <label htmlFor="dateofbirth">Date of Birth</label>
        <input type="date" id="dateofbirth" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
    </div>
    <div className="form-group">
        <label htmlFor="dateofjoining">Date of Joining</label>
        <input type="date" id="dateofjoining" name="dateofjoining" value={formData.dateofjoining} onChange={handleChange} required />
    </div>
</div>

                <div className="form-group">
                    <label htmlFor="language">Language</label>
                    <select id="language" name="language" value={formData.language} onChange={handleChange}>
                        <option value=" ">Select</option>
                        <option value="English">English</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Creole">Creole</option>
                        <option value="Greek">Greek</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Russian">Russian</option>
                    </select>
                </div>
                <div className="form-group">
                <label htmlFor="paidVacationDays">Paid Vacation Days</label> 
                <input type="number" id="paidVacationDays" name="paidVacationDays" value={formData.paidVacationDays} onChange={handleChange} min="0" />
                </div>
                <div className="form-group">
                     <label htmlFor="paidSickDays">Paid Sick Days</label>
                     <input type="number" id="paidSickDays" name="paidSickDays" value={formData.paidSickDays} onChange={handleChange} min="0" />
                </div>
                <div className="button-group" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                    <button type="button" onClick={handleAdd} style={{ padding: "5px 10px", fontSize: "12px" }}>Add</button>
                    <button type="button" onClick={handleDone} style={{ padding: "5px 10px", fontSize: "12px" }}>Done</button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployeeForm;
