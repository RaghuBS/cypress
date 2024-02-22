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
require('@4tw/cypress-drag-drop') 
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')


import dashbord  from '../PageObjectModel/Example-1/Dashbord.po'
import login from '../PageObjectModel/Example-1/loginDetails.po'

Cypress.Commands.add('addemplyee', (firstname, lastname) => {
    cy.contains(dashbord.box1()).should('be.visible')
  cy.contains(dashbord.box2()).should('be.visible')
  cy.contains(dashbord.box3()).should('be.visible')
  cy.contains('PIM').click();
  cy.contains('Add Employee').click();
  
  cy.get('input[name="firstName"]').type(firstname);
  cy.get('input[name="lastName"]').type(lastname);
  cy.get('button[type="submit"]').click();
  cy.contains('Success').should('be.visible');
  
 })

 Cypress.Commands.add('loginHRM', () => { 
    cy.visit('/web/index.php/auth/login');
  cy.get(login.username()).type('admin');
  cy.get(login.password()).type('admin123');
  cy.get(login.submitbutton).click();
    
  })