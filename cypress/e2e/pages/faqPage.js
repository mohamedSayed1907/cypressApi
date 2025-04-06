// cypress/support/api/loginPage.js
import { ApiHelper } from '../../support/apiHelper';
import { Endpoints } from '../../support/endpoints';

export class FAQPage {
 

  static getAllFAQ(token) {
    return ApiHelper.get(`${Endpoints.SECOND_URL}${Endpoints.FAQ}`, token, {});
  }
}
