import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeAdmin from "@/app/admin/page";

describe("Home Dashboard Admin", ()=> {
    it('displays default user name', () => {
        render(<HomeAdmin />);

        const welcomeText = screen.getByText('Active Survey Statistics');
        expect(welcomeText).toBeInTheDocument();
      });

    it('Display card when survey was published' , ()=> {{
        render(<HomeAdmin />);
        
        const cardStudentParticipant = screen.getByText('Student Participant');
        const cardStudentUnivParticipan = screen.getByText('Univeristy Particpant')


        expect(cardStudentParticipant).toBeInTheDocument();
        expect(cardStudentUnivParticipan).toBeInTheDocument()
    }})


    it("Diplay Graph Survey Performance", () => {
        render(<HomeAdmin/>);

        const surveyPerformanceText  = screen.getByText('Survey Performances')
        expect(surveyPerformanceText).toBeInTheDocument()
    })

})