// cypress/support/api/apiClient.js
export class ApiHelper {
    
    static get(endpoint, token) {
        return cy.request({
            method: 'GET',
            url: endpoint,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    static post(endpoint, token, body) {
        return cy.request({
            method: 'POST',
            url: endpoint,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: body
        });
    }

    static put(endpoint, token, body) {
        return cy.request({
            method: 'PUT',
            url: endpoint,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: body
        });
    }

    static delete(endpoint, token) {
        return cy.request({
            method: 'DELETE',
            url: endpoint,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}
