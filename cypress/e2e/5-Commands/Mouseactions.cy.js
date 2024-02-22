describe('mouse action', () => {
    it('rightclick', () => {
      cy.visit('https://www.programsbuzz.com/')
      cy.get('li[class="nav-item"]>a[href="/"]').rightclick()
      cy.log('double click')
      cy.wait(2000)
      cy.get('li[class="nav-item"]>a[href="/"]').trigger('hover')
      cy.get('li[class="nav-item"]>a[href="/search"]').dblclick({force:true})
    })
    it.only('Scrolling ', () => {
        cy.visit('https://docs.cypress.io/api/commands/scrollIntoView')
        
        cy.get('div[class*="theme"]>h2[id="Rules"]').scrollIntoView()
      })
  })
  
  