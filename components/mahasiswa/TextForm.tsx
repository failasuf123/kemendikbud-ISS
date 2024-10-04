import React, { useState } from 'react';

interface TextFormProps {
  questionId: string;
  onChange: (questionId: string, value: string) => void;
}

const TextForm: React.FC<TextFormProps> = ({ questionId, onChange }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(questionId, value);
  };

  return (
    <div className="ml-2 md:ml-5 mt-4">
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Tulis jawaban Anda di sini..."
        rows={5}
      />
    </div>
  );
};

export default TextForm;
