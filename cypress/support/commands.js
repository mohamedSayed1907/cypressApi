// cypress/support/commands.js
import { ApiHelper } from './apiHelper';
import { Endpoints } from './endpoints';
Cypress.Commands.add('getAuthToken', (loginBody) => {
    ApiHelper.post(`${Endpoints.BASE_URL}${Endpoints.LOGIN}`, {}, loginBody).then((response) => {    
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        return response.body.token;
    }
    );
  
  });
  