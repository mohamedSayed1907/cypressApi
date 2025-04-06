// cypress/support/api/loginPage.js
import { ApiHelper } from '../../support/apiHelper';
import { Endpoints } from '../../support/endpoints';

export class LoginPage {
 

  static loginUser(body) {
    return ApiHelper.post(`${Endpoints.BASE_URL}${Endpoints.LOGIN}`, {}, body);
  }
}
