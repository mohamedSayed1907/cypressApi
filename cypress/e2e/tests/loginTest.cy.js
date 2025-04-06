import { LoginPage } from '../pages/loginPage';

describe('Login API Test', () => {
    let responseData, loginBody;  
    const loginPage = new LoginPage();

    before(() => {
        cy.fixture('userData').then((body) => {
            loginBody = body.login; 
      
        });
    });

 
    it.only('Login With Valid Data', () => {
        LoginPage.loginUser(loginBody).then((response) => {
            Cypress.env('token', response.body.token);
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('token');
          cy.log('Login Token:', Cypress.env('token'));
        });
      });

      

});
