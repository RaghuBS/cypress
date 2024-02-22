describe('Iframe example', () => {
    it('select radio button', () => {
      cy.visit('https://jqueryui.com/checkboxradio/')

      cy.get('iframe[class="demo-frame"]').then(($iframe)=>{
        let checkbox1= $iframe.contents().find('label[for="radio-1"]')
        cy.wrap(checkbox1).click()
      })
    })
  })
  
  