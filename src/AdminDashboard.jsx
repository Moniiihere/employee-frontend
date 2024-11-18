import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
function AdminDashboard() {
  const [EmployeeName, setEmployeeName] = useState();
  const [EmployeeId, setEmployeeId] = useState();
  const [Asset1, setAsset1] = useState();
  const [Asset2, setAsset2] = useState();
  const [Asset3, setAsset3] = useState();
  const [Asset4, setAsset4] = useState();
  const [IssueDate, setIssueDate] = useState();
  const [ReturnDate, setReturnDate] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:3001/admin-dashboard", {
        EmployeeName,
        EmployeeId,
        Asset1,
        Asset2,
        Asset3,
        Asset4,
        IssueDate,
        ReturnDate,
      })
      .then((result) => {
        console.log(result);
        alert('successfulyy submitted')
        window.location.reload()
      })
      .catch((err) => console.log(err));
    
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-orange-400 from-50% to-gray-100 to-50% space-y-6 w-full  ">
      <h2 className="font-Anton lg:text-3xl text-2xl md:text-5xl font-bold text-white mt-20 pt-20 ">
      Employee Management System
      </h2>
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="flex justify-center text-2xl font-bold mb-4 font-Merriweather">
          Asset Master
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label className="block text-gray-700 mb-2 font-Merriweather">Employee Name:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border font-Merriweather"
              placeholder="Enter Name"
              onChange={(e) => setEmployeeName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="text" className="block text-gray-700 mb-2 font-Merriweather">
              Employee ID:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border font-Merriweather "
              placeholder="Enter Emp-ID"
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
          <h3 className="flex justify-center font-semibold mt-2 mb-2 font-Merriweather">
            Asset Name
          </h3>
          <div className="mb-1">
            <label htmlFor="text" className="block text-gray-700 mb-1 font-Merriweather">
              Asset 1:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border font-Merriweather"
              placeholder=""
              onChange={(e) => setAsset1(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="text" className="block text-gray-700 mb-1 font-Merriweather">
              Asset 2:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border font-Merriweather"
              placeholder=""
              onChange={(e) => setAsset2(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="text" className="block text-gray-700 mb-1 font-Merriweather">
              Asset 3:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border font-Merriweather "
              placeholder=""
              onChange={(e) => setAsset3(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="text" className="block text-gray-700 mb-1 font-Merriweather">
              Asset 4:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border font-Merriweather"
              placeholder=""
              onChange={(e) => setAsset4(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="text" className="block text-gray-700 mb-1 font-Merriweather">
              Issue Date:
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border font-Merriweather"
              placeholder=""
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="text" className="block text-gray-700 mb-1 font-Merriweather">
              Return Date:
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border font-Merriweather "
              placeholder=""
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>

          <div className="mb-4 flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 mt-5 font-Merriweather"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
