

describe('Drop down', () => {
    it('DropDown Example', () => {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

    // Text
    cy.get('select[name*="DOB_Month"]').select('JAN')
    cy.wait(1000)

    //Value
    cy.get('select[name*="DOB_Month"]').select('08')
    cy.wait(1000)

    //Index
    cy.get('select[name*="DOB_Month"]').select(10)
    cy.wait(1000)

     // to verify by giving value 
     cy.get('select[name*="DOB_Month"]').select('MAR').should('have.value',"03")
     cy.wait(1000)

     cy.get('select[name*="DOB_Month"]').select('SEP').should('have.value',"03")
     cy.wait(1000)

    })
    
    it.only('DropDown Example', () => {
        // this will ignore thw console error 

        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
          });

        cy.visit('https://chercher.tech/practice/dropdowns')
        cy.get('select[id="order-changed"]').select('Google')
      })
  })