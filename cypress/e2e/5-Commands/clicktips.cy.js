describe('Click tips', () => {
    it('passes', () => {
      cy.visit('https://www.cypress.io/')
      cy.contains("Smart Orchestration").click({force:true})
    })


    it.only('Multipal true', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.xpath('//button[text()="ADD TO CART"]').click({multiple:true})
        cy.get('input[class="search-keyword"]').type("Mango",{delay:0})
      })
  
    
  })