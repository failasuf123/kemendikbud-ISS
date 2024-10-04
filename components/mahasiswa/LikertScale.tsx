import React, { useState } from 'react';

interface LikertScaleProps {
  questionId: string;
  onChange: (questionId: string, value: number) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ questionId, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleValueChange = (value: number) => {
    setSelectedValue(value);
    onChange(questionId, value); 
  };

  return (
    <div className="ml-2 md:ml-5">
      <p className="text-sm mb-3">Pilih Jawaban</p>
      <div className="flex  justify-start gap-2 ">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className={`px-6 py-4 text-xl rounded-xl hover:scale-95 dark:text-gray-800 ${selectedValue === value ? 'bg-blue-500 text-white dark:text-white' : 'bg-gray-200'}`}
            onClick={() => handleValueChange(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LikertScale;
