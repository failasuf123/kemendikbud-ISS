import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardSurvey from '@/app/admin/survey/page';
import exp from 'constants';

describe("Home Survey -> Will show all surveys", ()=> {
   it("Display Head Text of HomeSurvey", () => {
    render(<DashboardSurvey/>);
    
    const textSurveys = screen.getByText('Surveys')
    expect(textSurveys).toBeInTheDocument()
   })

   it("if empy Surveys", () =>{
    render(<DashboardSurvey/>);
    
    const textEmpyt = screen.getByText('Saat ini tidak ada survey yang tersedia')
    expect(textEmpyt).toBeInTheDocument()
   })

//    it("list of survey is Available", () => {
//     render(<DashboardSurvey/>)


//    })
})