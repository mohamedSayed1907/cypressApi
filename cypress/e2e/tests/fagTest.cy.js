import { FAQPage } from '../pages/faqPage';
import { LoginPage } from '../pages/loginPage';
import '../../support/commands';

describe('Login API Test', () => {
    let responseData, loginBody,token;  
    const faqPage = new FAQPage();
    const loginPage = new LoginPage();

    before(() => {
        cy.fixture('userData').then((body) => {
            loginBody = body.login; 
            cy.getAuthToken(loginBody).then((authToken) => {
                token = authToken;               
              });
        });
   
    });

 
    it.only('Get All FAQS With Valid Data', () => {
         FAQPage.getAllFAQ(token).then((response) => {
            expect(response.status).to.eq(200);
 
        });
      });

      

});
