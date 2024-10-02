import React, { useState } from "react";

const CourseCurriculum = () => {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  const modules = [
    {
      title: "Basics of Accounting",
      content: [
        "Type of Accounts",
        "Golden Rules of Accounting",
        "Accounting Principles",
        "Concepts and Conventions",
      ],
    },
    {
      title: "Fundamental of Tally Prime",
      content: [
        "Introduction to Tally Prime",
        "Creating a Company",
        "Data Path for Tally ERP9 Companies",
        "Altering and Deleting Company",
      ],
    },
    {
      title: "Balance Sheet",
      content: [
        "Understanding Balance Sheet",
        "Creating Balance Sheet",
        "Practical Examples",
      ],
    },
    {
      title: "Masters – Ledgers",
      content: [
        "Understanding Ledgers",
        "Creating Ledgers",
        "Creating Multiple Ledgers",
        "Altering and Deleting Ledgers",
        "Practical Examples",
      ],
    },
    {
      title: "Masters – Inventory",
      content: [
        "Understanding Inventory",
        "Integrating Accounts and Inventory",
        "Practical on Stock Group",
        "Practical on Stock Category",
        "Practical on Units of Measure",
        "Practical on Stock Items",
        "Practical Examples",
      ],
    },
    {
      title: "Voucher Entry",
      content: [
        "Understanding and Creating Payment Voucher",
        "Understanding and Creating Receipt Voucher",
        "Understanding and Creating Sales Voucher",
        "Understanding and Creating Purchase Voucher",
        "Understanding and Creating Journal Voucher",
        "Understanding and Creating Contra Voucher",
        "Practical Examples, Single Entry Mode & Double Entry Mode",
      ],
    },
    {
      title: "Profit & Loss A/c and Error Correction",
      content: [
        "Understanding Profit & Loss",
        "Understanding Voucher Mistake",
        "Correcting Mistakes",
        "Checking Profit & Loss and Balance Sheet after Corrections",
      ],
    },
    {
      title: "Advance Features of Tally Prime",
      content: [
        "Manufacturing",
        "Budget",
        "Godown / Location",
        "Point of Sales",
        "Purchase Order & Sales Order",
        "Debit Notes & Credit Notes",
        "Optional Voucher",
        "Group Company",
        "Split Company",
        "Security Control",
        "Interest Calculation",
        "Credit Limit",
        "Cost Center",
        "Tally Password",
        "Grouping",
        "Filter Report",
        "Bank Reconciliation",
        "Party Ledger Analysis",
        "Price List in Tally",
        "Batch Wise Details",
        "Tally Audit",
        "Backup & Restore",
        "Printing Reports",
      ],
    },
    {
      title: "Tax Deducted at Source (TDS)",
      content: [
        "Understanding TDS",
        "Creating TDS Masters",
        "TDS Payment",
        "Practical Examples",
      ],
    },
    {
      title: "Goods & Service Tax (GST)",
      content: [
        "About Goods & Service Tax (GST)",
        "Setting Up GST (Company Level, Ledger level or Inventory Level)",
        "GST Tax & Invoices",
        "Understanding SGST, CGST & IGST",
        "Creating GST Master in Tally",
        "Purchase GST Voucher",
        "Sales GST Voucher",
        "GST Reports and Returns",
        "(GSTR-1, GSTR-2, GSTR-3B) Return",
      ],
    },
  ];

  return (
    <div className="bg-[#328AB0]/10 text-[#075593] p-6 rounded-lg">
      <div className="flex justify-between bg-[#328AB0]/20 text-[#075593] p-4 rounded-lg">
        <span>{modules.length} Modules</span>
        <span>
          {" "}
          <h1 className="text-4xl font-bold mb-4">Course curriculum</h1>
        </span>
        <span>
          {modules.reduce((acc, module) => acc + module.content.length, 0)}{" "}
          Lessons
        </span>
      </div>

      {/* Modules */}
      <div className="mt-4">
        {modules.map((module, index) => (
          <div key={index} className="border-b border-[#328AB0]/30">
            <div
              className="p-4 flex justify-between items-center cursor-pointer bg-[#075593]/20 hover:bg-[#328AB0]/30"
              onClick={() => toggleModule(index)}>
              <span className="font-semibold">{module.title}</span>
              <span>{openModule === index ? "▲" : "▼"}</span>
            </div>
            {openModule === index && (
              <div className="p-4 bg-[#328AB0]/20">
                <ul className="list-disc pl-5">
                  {module.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[#075593]/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;
