
  interface UserAdmin {
    admin_id: string;
    name: string;
    email: string;
    noHp: string;
    role_id: string;
  }
  
  interface ApiManagement {
    apiManage_id: string;
    name: string;
    description: string;
    api: string;
    admin_id: string;
  }
  
  interface Survey {
    survey_id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    isPublish: boolean;
    year: number;
    admin_id: string;
  }

  interface SectionQuestion {
      section_id: string;
      name: string;
      description: string;
      survey_id: string    
  }
  
  interface Question {
      question_id: string;
      question: string;
      type: string;
      isRequired: string;
  }

  //Mahasiswa
  interface UserMahasiswa{
      mahasiswa_id: string;
      name: string;
      email: string;
      noHp: string;
      university: string;
      faculty: string;
      cohort: string;
  }

  interface Response{
      response_id: string;
      response: string;
      question_id: string;
      mahasiswa_id: string;
  }

  interface SurveyPublish{
      id_surveyPublish : string;
      id_mahasiswa: string;
      isSubmit: boolean;
      token: string;
      id_resonse: string;
  }

  export {
      UserAdmin, 
      ApiManagement, 
      Survey, 
      SectionQuestion, 
      Question, 
      UserMahasiswa,
      Response, 
      SurveyPublish
    }