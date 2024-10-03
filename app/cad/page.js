"use client";
import React from "react";
import useSWR from 'swr';

const fetcher = async (url) => {
  console.log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    headers: { 'Cache-Control': 'no-cache' }
  });
  if (!res.ok) {
    console.error(`Error fetching from ${url}:`, res.statusText);
    throw new Error('An error occurred while fetching the data.');
  }
  const data = await res.json();
  console.log(`Data received from ${url}:`, data);
  return data;
};

const ContactAdminDashboard = () => {
  const { data: enquiryData, error: enquiryError, mutate: mutateEnquiry } = useSWR('/api/getEnquiry', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  const { data: demoData, error: demoError, mutate: mutateDemo } = useSWR('/api/getDemoEnquiry', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const isLoading = !enquiryData && !enquiryError || !demoData && !demoError;
  const error = enquiryError || demoError;

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
      if (isDemo) {
        mutateDemo();
      } else {
        mutateEnquiry();
      }
    } catch (error) {
      console.error(`Error deleting ${isDemo ? "demo " : ""}entry:`, error);
    }
  };

  const refreshData = () => {
    console.log("Manually refreshing data...");
    mutateEnquiry();
    mutateDemo();
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Contact Form Submissions
        </h2>
        <button
          onClick={refreshData}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Refresh Data
        </button>
      </div>
      {renderTable(enquiryData?.data || [])}

      <h2 className="text-3xl font-bold my-6 text-gray-800">
        Demo Form Submissions
      </h2>
      {renderTable(demoData?.data || [], true)}
    </div>
  );
};

export default ContactAdminDashboard;