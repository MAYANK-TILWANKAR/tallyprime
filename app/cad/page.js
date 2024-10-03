"use client";
import React, { useEffect, useState } from "react";

const ContactAdminDashboard = () => {
  const [formData, setFormData] = useState([]);
  const [demoData, setDemoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const timestamp = new Date().getTime();
      const [enquiryRes, demoRes] = await Promise.all([
        fetch(`/api/getEnquiry?t=${timestamp}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
        }),
        fetch(`/api/getDemoEnquiry?t=${timestamp}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
        }),
      ]);

      if (!enquiryRes.ok || !demoRes.ok) {
        throw new Error(`Error fetching data`);
      }

      const [enquiryData, demoData] = await Promise.all([
        enquiryRes.json(),
        demoRes.json(),
      ]);

      console.log("Enquiry data:", enquiryData);
      console.log("Demo data:", demoData);

      setFormData(enquiryData.data);
      setDemoData(demoData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message || "An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id, isDemo = false) => {
    console.log(`Deleting ${isDemo ? "demo" : "enquiry"} entry with id:`, id);
    try {
      const response = await fetch(
        isDemo ? "/api/deleteDemoEnquiry" : "/api/deleteEnquiry",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify({ id }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete ${isDemo ? "demo " : ""}entry`);
      }

      console.log("Delete successful, refreshing data...");
      await fetchData();
    } catch (error) {
      console.error(`Error deleting ${isDemo ? "demo " : ""}entry:`, error);
      setError(error.message);
    }
  };

  const renderTable = (data, isDemo = false) => (
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
            {isDemo ? (
              <>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  College
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Date
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                  Course
                </th>
              </>
            ) : (
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                Message
              </th>
            )}
            <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={isDemo ? 7 : 5}
                className="text-center py-4 text-gray-500">
                No {isDemo ? "demo " : ""}submissions found
              </td>
            </tr>
          ) : (
            data.map((entry) => (
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
                {isDemo ? (
                  <>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.college}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {entry.course}
                    </td>
                  </>
                ) : (
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.message}
                  </td>
                )}
                <td className="px-6 py-4 text-sm text-gray-900">
                  <button
                    onClick={() => handleDelete(entry._id, isDemo)}
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
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Contact Form Submissions
        </h2>
        <button
          onClick={fetchData}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Refresh Data
        </button>
      </div>
      {renderTable(formData)}

      <h2 className="text-3xl font-bold my-6 text-gray-800">
        Demo Form Submissions
      </h2>
      {renderTable(demoData, true)}
    </div>
  );
};

export default ContactAdminDashboard;