describe('template spec', () => {

    beforeEach(()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.title().should('eq','Wikipedia')
    })

    it('conditional testing ', () => {
        cy.get('body').then(($body)=>{
            if($body.find('span[data-jsl10n="wiktionary.name"]').length>0){
                cy.get('span[data-jsl10n="wiktionary.name"]').click()
                cy.wait(2000)
                cy.origin('https://www.wiktionary.org/',()=>{
                    cy.title().should("eq","Wiktionary")
                })
                
            }
            else{
                cy.get('span[data-jsl10n="commons.name"]').click()
                cy.origin('https://commons.wikimedia.org/wiki/Main_Page',()=>{
                     cy.title().should('eq','Wikimedia Commons')
                })
            }
          

        })
      
    })
  })
  
  