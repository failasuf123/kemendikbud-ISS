import { render, screen ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateSurvey
 from '@/app/admin/survey/create/page';
import exp from 'constants';
import CardSurvey from '@/components/admin/CardSurvey';

interface Survey {
    id: number;
    name: string;
    startDate : string;
    endDate: string;
    isPublished : boolean;
}

describe("Card Survey", ()=> {
    it('Survey is Published', () => {
        const dataDummyisPublishe = {
            id : 1,
            name : "2024",
            startDate : "1 Januari 2024",
            endDate : "2 Januari 2024",
            isPublished : true
        }
        render(<CardSurvey {...dataDummyisPublishe}/>);

        // const welcomeText = screen.getByText(/Create Survey/i);
        const yearPublish = screen.getByText(dataDummyisPublishe.name)
        const isPublished  = screen.getByText("PUBLISHED")
        const startDate = screen.getByText(dataDummyisPublishe.startDate)
        const endDate = screen.getByText(dataDummyisPublishe.endDate)
        expect(yearPublish).toBeInTheDocument();
        expect(isPublished).toBeInTheDocument();
        expect(startDate).toBeInTheDocument();
        expect(endDate).toBeInTheDocument();

      });

    it('Survey is not Published', () => {
        const dataDummyisPublishe = {
            id : 1,
            name : "2026",
            startDate : "1 Januari 2024",
            endDate : "10 Januari 2024",
            isPublished : false
        }

        render(<CardSurvey {...dataDummyisPublishe} />);

        const yearPublish = screen.getByText(dataDummyisPublishe.name)
        const startDate = screen.getByText(dataDummyisPublishe.startDate)
        const endDate = screen.getByText(dataDummyisPublishe.endDate)
        
        expect(yearPublish).toBeInTheDocument();
        expect(startDate).toBeInTheDocument();
        expect(endDate).toBeInTheDocument();
    });

})