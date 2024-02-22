describe('template spec', () => {
    it('passes', () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
          });
      cy.visit('https://www.flipkart.com')
      cy.get('input[type="text"]').type('iPhone 13{enter}')
     
     
      cy.xpath('(//div[@class="_3pLy-c row"]/div/div[@class="_4rR01T"])[1]').invoke('Attr','target').click({force:true})

      
    })
  })
  
  