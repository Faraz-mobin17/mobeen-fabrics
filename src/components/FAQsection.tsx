// src/components/FAQSection.js
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Banarasi Saree?",
      answer:
        "Banarasi sarees are traditionally made in Varanasi, India. Known for their gold and silver brocade or zari, fine silk, and opulent embroidery, they are a symbol of the rich cultural heritage of India.",
    },
    {
      question: "How do I care for my Banarasi Saree?",
      answer:
        "To maintain the beauty and longevity of your Banarasi saree, dry clean is recommended. Store it in a muslin cloth to allow the fabric to breathe, and avoid direct exposure to sunlight for extended periods.",
    },
    {
      question: "What occasions are Banarasi Sarees suitable for?",
      answer:
        "Banarasi sarees are perfect for weddings, festivals, and other special occasions due to their rich texture and elegant design. They are also a popular choice for bridal wear.",
    },
    {
      question: "How can I identify an authentic Banarasi Saree?",
      answer:
        "An authentic Banarasi saree will have intricate detailing, often with Mughal-inspired motifs such as floral patterns, kalga, and bel. It is also heavier due to the rich fabric and zari work.",
    },
    {
      question: "Are Banarasi Sarees available in different fabrics?",
      answer:
        "Yes, Banarasi sarees are available in a variety of fabrics including pure silk (Katan), organza (Kora), georgette, and shattir. Each type has its own unique characteristics and appeal.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 p-5">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-4 py-2 bg-pink-100 hover:bg-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-900">
                {faq.question}
              </span>
              <span className="text-slate-900">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
          </button>
          {openIndex === index && (
            <div className="mt-2 px-4 py-2 bg-white border rounded-lg shadow">
              <p className="text-slate-900">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
