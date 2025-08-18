import { cn } from "../../lib/utils";

type FaqItemProps = {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
};

export const FaqItem = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) => {
  const answerId = `faq-answer-${id}`;

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left text-lg font-semibold text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span>{question}</span>
        <span
          className={cn(
            'transform transition-transform duration-300',
            isOpen && "rotate-45",
            !isOpen && "rotate-0"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </span>
      </button>

      <div
        id={answerId}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? "31rem" : "0rem" }}
      >
        <p aria-multiline className="pt-4 text-gray-600 whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
};
