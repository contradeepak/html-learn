import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center p-4 text-left font-medium"
        onClick={onClick}
      >
        {title}
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && <div className="p-4 text-gray-600">{content}</div>}
    </div>
  );
};

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto border rounded-lg overflow-hidden">
      {items.length > 0 ? (
        items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))
      ) : (
        <p className="p-4 text-center text-gray-500">No content available</p>
      )}
    </div>
  );
};

export default Accordion;
