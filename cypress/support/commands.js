// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// Login To CRM with Valid Login for All Automation
Cypress.Commands.add('loginCRM', function () {
  cy.visit('/');
  cy.fixture('arrays/dataLogin')
    .as('data')
    .then(() => {
      cy.get('input[name="username"]').type(data);
      cy.get('input[name="password"]').type(data);
      cy.get('input[type="checkbox"]').should('not.be.checked').check();
      cy.get('button[type="submit"]').click();
      // cy.url().should('include', data);
    });
});

// Test Login Page
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
