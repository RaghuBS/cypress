describe('File upload', () => {
    it('text file', () => {
      cy.visit('https://cgi-lib.berkeley.edu/ex/perl5/fup.html')
      cy.get('input[name="upfile"]').attachFile("Upload/sample.txt")
      cy.wait(2000)
      cy.get('input[name="note"]').type("text file upload ")
      cy.wait(2000)
      cy.get('input[value="Press"]').click()
      cy.wait(2000)
      //cy.origin('https://cgi-lib.berkeley.edu/ex/perl5/fup.cgi')
      cy.contains("You've uploaded a file").should("be.visible")
    })
    it('pdf file', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/perl5/fup.html')
        cy.get('input[name="upfile"]').attachFile("Upload/Sample wrord.pdf")
        cy.wait(2000)
        cy.get('input[name="note"]').type("text file upload ")
        cy.wait(2000)
        cy.get('input[value="Press"]').click()
        cy.wait(2000)
        cy.contains("Sample wrord.pdf").should("be.visible")
      })

      it.only('text file with out plugin', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/perl5/fup.html')
        cy.get('input[name="upfile"]').selectFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/Upload/sample.txt")
        cy.wait(2000)
        cy.get('input[name="note"]').type("text file upload ")
        cy.wait(2000)
        cy.get('input[value="Press"]').click()
        cy.wait(2000)
        //cy.origin('https://cgi-lib.berkeley.edu/ex/perl5/fup.cgi')
        cy.contains("You've uploaded a file").should("be.visible")
      })
  })
  
  