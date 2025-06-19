import React, { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is PCOS?",
      answer:
        "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of reproductive age. It can cause irregular periods, excess androgen levels, and polycystic ovaries, leading to fertility issues and other health problems.",
    },
    {
      question: "How can I manage PCOS symptoms?",
      answer:
        "Managing PCOS involves a combination of lifestyle changes like a healthy diet, regular exercise, and sometimes medications like birth control pills or insulin-sensitizing drugs. It's important to work with a healthcare provider to develop a personalized treatment plan.",
    },
    {
      question: "What is the role of AI in managing PCOS?",
      answer:
        "AI can analyze health data to provide personalized recommendations on diet, exercise, and symptom management. It helps track progress and offers insights based on individual health needs, making PCOS management more tailored and effective.",
    },
    {
      question: "Can PCOS affect fertility?",
      answer:
        "Yes, PCOS can affect fertility by causing irregular ovulation or anovulation (lack of ovulation). However, many women with PCOS can still conceive with proper management and treatment options like medication to regulate ovulation.",
    },
    {
      question: "Is there a cure for PCOS?",
      answer:
        "Currently, there is no cure for PCOS. However, symptoms can be managed with medications and lifestyle changes. Treatment focuses on reducing symptoms and preventing complications such as infertility and metabolic issues.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                <span className="text-gray-500">{open === index ? "-" : "+"}</span>
              </div>
              {open === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
