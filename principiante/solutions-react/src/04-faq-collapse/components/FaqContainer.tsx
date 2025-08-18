import { useState } from "react";
import { FaqItem } from "./FaqItem";
import { faqMockData } from "../data/faq-data.mock";

export const FaqContainer = () => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="mx-auto my-8 w-full max-w-2xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
        Preguntas Frecuentes
      </h2>
      {faqMockData.map((faq) => (
        <FaqItem
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={openItemId === faq.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};
