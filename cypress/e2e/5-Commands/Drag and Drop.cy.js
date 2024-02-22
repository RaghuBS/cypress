describe('Drag N Drop', () => {
    it('Drag N Drop  with pligin', () => {
      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')

//cy.get('.sourceitem').drag('.targetitem')
      cy.get('#menu-hamburger').drag('#plate-items')
      
    })

    it.only('Drag N Drop  without pligin', () => {

        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')

        const dataTransfer =new DataTransfer()
        cy.get('#menu-hamburger').trigger('dragstart' ,{dataTransfer})

        cy.get('#plate-items').trigger('drop',{dataTransfer})


        cy.get('#menu-fried-chicken').trigger('dragstart' ,{dataTransfer})

        cy.get('#plate-items').trigger('drop',{dataTransfer})

        cy.get('#menu-ice-cream').trigger('dragstart' ,{dataTransfer})

        cy.get('#plate-items').trigger('drop',{dataTransfer})
  
      })
  })
  
  