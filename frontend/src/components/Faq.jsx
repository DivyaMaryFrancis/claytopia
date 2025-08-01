import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: "What is Claytopia?",
      answer: "Claytopia is a handmade craft store specializing in clay-based products like keychains, charms, earrings, and personalized gifts."
    },
    {
      question: "Are all your products handmade?",
      answer: "Yes! All our products are carefully handcrafted with love and creativity using high-quality clay."
    },
    {
      question: "Can I customize a product?",
      answer: "Absolutely! We offer customization options for most items. You can choose colors, names, initials, or even themes. Just contact us through the 'Place Order' page."
    },
    {
      question: "How long does it take to process an order?",
      answer: "Since our products are handmade, we typically take 3-5 days to prepare your order before shipping."
    },
    {
      question: "What are your shipping options?",
      answer: "We offer standard and express shipping across India. Shipping charges are calculated at checkout based on your location."
    },
    {
      question: "Do you accept returns?",
      answer: "As our items are handmade and customized, we currently do not accept returns. However, if there's an issue with your order, please contact us and we’ll make it right."
    }
  ];

  return (
    <div className="w-4/5 mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            <p className="text-gray-600 mt-1">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
