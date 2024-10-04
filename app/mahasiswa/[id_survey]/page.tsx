'use client'
import React, { useState } from 'react';
import LikertScale from '@/components/mahasiswa/LikertScale';
import TextForm from '@/components/mahasiswa/TextForm'; 



interface PageProps {
  params: {
    id_survey: string; 
  };
}

const SurveyPage: React.FC<PageProps> = ({ params }) => {
  const { id_survey } = params;
  const [responses, setResponses] = useState<{ [key: string]: any }>({});

  const handleLikertChange = (questionId: string, value: number) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  const handleTextChange = (questionId: string, value: string) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Hasil survey:', responses);
  };

  return (
    <div className="px-8 md:px-14 lg:px-16 flex flex-col md:flex-row gap-5 md:gap-14 my-5">
      <div>
        kdsnds
      </div>

      <div>
        <h1>Survey Mahasiswa</h1>
      
      <div className="px-3">
        
        <div className="mt-4">
          <h2 className="mb-4">1. Seberapa puas Anda dengan penyampaian materi dari dosen?</h2>
          <LikertScale questionId="q1" onChange={handleLikertChange} />
        </div>
   
        <div className="mt-4">
          <h2 className="mb-4">2. Seberapa nyaman Anda dengan fasilitas fakultas Anda?</h2>
          <LikertScale questionId="q2" onChange={handleLikertChange} />
        </div>
          
        <div className="mt-4">
          <h2 className="mb-4">3. Seberapa puas Anda dengan penyampaian materi dari dosen?</h2>
          <LikertScale questionId="q1" onChange={handleLikertChange} />
        </div>
   
        <div className="mt-4">
          <h2 className="mb-4">4. Seberapa nyaman Anda dengan fasilitas fakultas Anda?</h2>
          <LikertScale questionId="q2" onChange={handleLikertChange} />
        </div>
   
        <div className="mt-4">
          <h2 className="mb-4">3. Bagaimana pendapat Anda tentang pengalaman belajar secara keseluruhan?</h2>
          <TextForm questionId="q3" onChange={handleTextChange} />
        </div>

        <div className="mt-4">
          <h2 className="mb-4">5. Bagaimana pendapat Anda tentang pengalaman belajar secara keseluruhan?</h2>
          <TextForm questionId="q4" onChange={handleTextChange} />
        </div>
        

        
        <div className="mt-4">
          <h2 className="mb-4">1. Seberapa puas Anda dengan penyampaian materi dari dosen?</h2>
          <LikertScale questionId="q5" onChange={handleLikertChange} />
        </div>
   
        <div className="mt-4">
          <h2 className="mb-4">2. Seberapa nyaman Anda dengan fasilitas fakultas Anda?</h2>
          <LikertScale questionId="q6" onChange={handleLikertChange} />
        </div>
          
        <div className="mt-4">
          <h2 className="mb-4">3. Seberapa puas Anda dengan penyampaian materi dari dosen?</h2>
          <LikertScale questionId="q7" onChange={handleLikertChange} />
        </div>
   
        <div className="mt-4">
          <h2 className="mb-4">4. Seberapa nyaman Anda dengan fasilitas fakultas Anda?</h2>
          <LikertScale questionId="q8" onChange={handleLikertChange} />
        </div>
   
        <div className="mt-4">
          <h2 className="mb-4">5. Bagaimana pendapat Anda tentang pengalaman belajar secara keseluruhan?</h2>
          <TextForm questionId="q9" onChange={handleTextChange} />
        </div>

        <div className="mt-4">
          <h2 className="mb-4">6. Bagaimana pendapat Anda tentang pengalaman belajar secara keseluruhan?</h2>
          <TextForm questionId="q10" onChange={handleTextChange} />
        </div>
        


        
        <div className="mt-8 md:mt-14 flex ml-6">
          <button
            onClick={handleSubmit}
            className="flex items-center text-white justify-center w-40 rounded-xl px-3 py-2 bg-green-600 cursor-pointer hover:scale-95"
          >
            Submit Survey
          </button>
        </div>
      </div>

      </div>
    </div>
  );
}

export default SurveyPage;
