"use client";
import React, { useEffect, useState } from "react";

const ContactAdminDashboard = () => {
  const [formData, setFormData] = useState([]);
  const [demoData, setDemoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [enquiryRes, demoRes] = await Promise.all([
          fetch("/api/getEnquiry"),
          fetch("/api/getDemoEnquiry"),
        ]);

        if (!enquiryRes.ok || !demoRes.ok) {
          throw new Error(`Error fetching data`);
        }

        const [enquiryData, demoData] = await Promise.all([
          enquiryRes.json(),
          demoRes.json(),
        ]);

        setFormData(enquiryData.data);
        setDemoData(demoData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id, isDemo = false) => {
    try {
      const response = await fetch(
        isDemo ? "/api/deleteDemoEnquiry" : "/api/deleteEnquiry",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete ${isDemo ? "demo " : ""}entry`);
      }

      if (isDemo) {
        setDemoData(demoData.filter((entry) => entry._id !== id));
      } else {
        setFormData(formData.filter((entry) => entry._id !== id));
      }
    } catch (error) {
      console.error(`Error deleting ${isDemo ? "demo " : ""}entry:`, error);
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Contact Form Submissions
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
          <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
            <thead>
              <tr className="text-left">
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Name
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Email
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Mobile
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Message
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {formData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No submissions found
                  </td>
                </tr>
              ) : (
                formData.map((entry) => (
                  <tr key={entry._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.mobile}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.message}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <button
                        onClick={() => handleDelete(entry._id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Demo Form Submissions
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
          <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
            <thead>
              <tr className="text-left">
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Name
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Email
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Mobile
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  College
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Date
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Course
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {demoData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No demo submissions found
                  </td>
                </tr>
              ) : (
                demoData.map((entry) => (
                  <tr key={entry._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.mobile}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.college}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.course}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <button
                        onClick={() => handleDelete(entry._id, true)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactAdminDashboard;
