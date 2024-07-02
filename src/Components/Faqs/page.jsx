import React, { useState } from 'react';
import './styles.css'; // Make sure to create a CSS file for styling

const FAQs = [
  {
    question: "What services does CSPRO Technology offer?",
    answer: "CSPRO Technology provides a wide range of IT services including web development, mobile app development, data analytics, cloud computing, cybersecurity, IT consulting, managed IT services, custom software development, AI integration, and e-commerce development."
  },
  {
    question: "How can CSPRO Technology help my business grow?",
    answer: "Our comprehensive IT services are designed to optimize your business operations, improve efficiency, and drive growth. By leveraging the latest technologies and industry best practices, we provide solutions that help you stay competitive and meet your business objectives."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve a diverse range of industries including healthcare, finance, retail, manufacturing, education, and more. Our team has the expertise to understand the unique challenges of each industry and deliver tailored solutions."
  },
  {
    question: "Do you offer customized IT solutions?",
    answer: "Yes, we provide customized IT solutions that align with your specific business needs and goals. Our team works closely with you to understand your requirements and deliver solutions that are tailored to your unique challenges and objectives."
  },
  {
    question: "How experienced is your team?",
    answer: "Our team comprises highly skilled professionals with extensive experience in various IT domains. From certified developers and data scientists to cybersecurity experts and cloud engineers, our team has the expertise to deliver high-quality solutions."
  },
  {
    question: "What is your approach to cybersecurity?",
    answer: "We take a proactive approach to cybersecurity, offering end-to-end security solutions including risk assessment, threat detection, and incident response. Our goal is to protect your data and systems from potential threats, ensuring a secure environment for your business."
  }
];

const AccordionItem = ({ faq, isOpen, onClick }) => (
  <div className="accordion-item">
    <button className="accordion-title" onClick={onClick}>
      <span>{faq.question}</span>
      <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
    </button>
    {isOpen && <div className="accordion-content">{faq.answer}</div>}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {FAQs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
