describe('Shadow element', () => {
    it('Shadow', () => {
        Cypress.on("uncaught:exception", () => {
            return false;
          });
      cy.visit('http://watir.com/examples/shadow_dom.html')
      cy.get('#shadow_host').shadow().find('input[type="text"]').type("shadow")
    })
  })
  
  