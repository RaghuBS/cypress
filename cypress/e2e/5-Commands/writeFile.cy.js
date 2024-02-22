describe('template spec', () => {
    it('writeFile1', () => {
      
        cy.writeFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/WriteFile/text.txt",'Raghu\n')
    })
    it('writeFile2', () => {
      
        cy.writeFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/WriteFile/text.txt",'Vilas',{flag:"a+"})
    })
    it('writeFile2', () => {
      
        cy.writeFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/WriteFile/test.json",{firstname:'raghu',lastname:'BS'})
       // how to read /or verify the data 
       cy.readFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/WriteFile/test.json").its("firstname").should('eq','raghu')
       cy.readFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/SampleFile-1/login1.json").its("username").should('eq','admin')
    })
    it('readFile', () => {
      
        
       // how to read /or verify the data 
       cy.readFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/WriteFile/test.json").its("firstname").should('eq','raghu')
       cy.readFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/SampleFile-1/login1.json").its("username").should('eq','admin')
 
       cy.readFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/WriteFile/text.txt").should('contain','Raghu')
       cy.readFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/WriteFile/text.txt").should('contain','Raghu\nVilas')
    })
  })
  
  