describe('Tabs/ windows', () => {
    it('Tabs Example 1', () => {

      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });


      cy.visit('https://www.cypress.io/')
      cy.contains('API').invoke('removeAttr','target').click({force:true})

      cy.wait(2000)
      cy.reload()

      cy.url().should('include','https://docs.cypress.io/api/commands/and')

      
    })

    it.only ('tabs/windows without target ', () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });

      cy.visit('https://demoqa.com/browser-windows'),{
        onBeforeload(win){
          cy.stub(win,'open')
        }
      }

      cy.get('#tabButton').click()
      cy.window().its('open').should('be.called')
      cy.visit('https://demoqa.com/sample')

      cy.get("#sampleHeading").should("be.visible")
    })
  })
  
  