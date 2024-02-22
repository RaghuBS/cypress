describe('download image', () => {
    it('jpj', () => {
      cy.downloadFile('https://img.freepik.com/free-vector/valentines-day-concept-card-paper-cut-style_1017-29864.jpg','cypress/downloads',"img.jpg")
      cy.readFile('cypress/downloads/img.jpg').should('exist')
    })
    it.only('jpj', () => {
        let r= (Math.random()+1).toString(36).substring(7);
        cy.downloadFile('https://img.freepik.com/free-vector/valentines-day-concept-card-paper-cut-style_1017-29864.jpg','cypress/downloads',"img"+r+".jpg")
        cy.readFile('cypress/downloads/img.jpg').should('exist')
      })
  })
  
  