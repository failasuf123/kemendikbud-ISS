import { render, screen ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateSurvey
 from '@/app/admin/survey/create/page';
import exp from 'constants';
describe("Create Page", ()=> {
    it('displays default user name', () => {
        render(<CreateSurvey />);

        const welcomeText = screen.getByText(/Create Survey/i);
        expect(welcomeText).toBeInTheDocument();
      });

    it('Form in create page', () => {
        render(<CreateSurvey/>);

        const displayName = screen.getByText('Display Name')

        expect(displayName).toBeInTheDocument()
       
    })

    it('Form in create page', () => {
        render(<CreateSurvey/>);

        const scheduleName = screen.getByText('Schedule Survey')

        expect(scheduleName).toBeInTheDocument()
    })

    it('Form in create page', () => {
        render(<CreateSurvey/>);
        const descriptionName  = screen.getByText('Description')
        expect(descriptionName).toBeInTheDocument()
    })


    it('Button Action', () => {
        render(<CreateSurvey/>)

        const button = screen.getByRole('button',{name : 'Create'})
        const buttonText = screen.getByText('Create');
        
        // fireEvent.click(button);
        expect(button).toBeInTheDocument()
    })
})