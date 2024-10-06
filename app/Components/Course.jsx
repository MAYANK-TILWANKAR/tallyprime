import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className=" py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-[#075593]">
            Course Curriculum
          </h1>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-[#075593]/5 rounded-lg overflow-hidden">
                <motion.div
                  className="p-3 sm:p-4 flex justify-between items-center cursor-pointer bg-[#075593]/10 hover:bg-[#075593]/20 transition-colors duration-300"
                  onClick={() => toggleModule(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}>
                  <span className="font-semibold text-sm sm:text-base text-[#075593]">
                    {module.title}
                  </span>
                  <motion.span
                    animate={{ rotate: openModule === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#328AB0]">
                    ▼
                  </motion.span>
                </motion.div>
                <AnimatePresence>
                  {openModule === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 sm:p-4 bg-white">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {module.content.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-center text-[#328AB0] text-sm sm:text-base"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.05 }}>
                            <span className="mr-2 text-[#075593]">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
