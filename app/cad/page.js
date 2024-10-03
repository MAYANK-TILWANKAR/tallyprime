"use client";
import React, { useEffect, useState } from "react";

const ContactAdminDashboard = () => {
  const [formData, setFormData] = useState([]);
  const [demoData, setDemoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const [enquiryRes, demoRes] = await Promise.all([
        fetch("/api/getEnquiry"),
        fetch("/api/getDemoEnquiry"),
      ]);

      const [enquiryData, demoData] = await Promise.all([
        enquiryRes.json(),
        demoRes.json(),
      ]);

      setFormData(enquiryData);
      setDemoData(demoData);
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id, isDemo) => {
    try {
      await fetch(isDemo ? "/api/deleteDemoEnquiry" : "/api/deleteEnquiry", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      fetchData();
    } catch (error) {
      setError("Failed to delete entry");
    }
  };

  const renderTable = (data, isDemo) => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          {isDemo ? (
            <>
              <th>College</th>
              <th>Date</th>
              <th>Course</th>
            </>
          ) : (
            <th>Message</th>
          )}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry._id}>
            <td>{entry.name}</td>
            <td>{entry.email}</td>
            <td>{entry.mobile}</td>
            {isDemo ? (
              <>
                <td>{entry.college}</td>
                <td>{entry.date}</td>
                <td>{entry.course}</td>
              </>
            ) : (
              <td>{entry.message}</td>
            )}
            <td>
              <button onClick={() => handleDelete(entry._id, isDemo)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Contact Form Submissions</h2>
      <button onClick={fetchData}>Refresh Data</button>
      {renderTable(formData, false)}

      <h2>Demo Form Submissions</h2>
      {renderTable(demoData, true)}
    </div>
  );
};

export default ContactAdminDashboard;
