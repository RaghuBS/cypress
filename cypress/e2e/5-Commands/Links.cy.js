describe('working with links ', () => {
    it('passes', () => {
      cy.visit('https://www.wikipedia.org/')
      cy.get('a').should('have.length',356)  // when we know exact lenth 
      cy.get('a').contains('Commons').click()

      cy.origin('https://commons.wikimedia.org/wiki/Main_Page', ()=>{

    cy.url().should('include',"/wiki/Main_Page")
    cy.url().should('eq',"https://commons.wikimedia.org/wiki/Main_Page")
    cy.get('.mainpage-welcome-sitename').should('contain.text',"Wikimedia Commons")

    cy.get('a').its('length').then((linklength)=>{

        var lengthcount=linklength

        cy.log(lengthcount)

        expect(lengthcount).to.be.lessThan(700)
        expect(lengthcount).to.be.within(300,800)
        expect(lengthcount).to.be.greaterThan(600)
        expect(lengthcount).to.be.below(1000)
        expect(lengthcount).to.be.above(400)
       // expect(lengthcount).to.be.equal(698)
        
    })

    cy.get('.vector-menu-content-list').eq(6).find('a').its('length').then((elelength)=>{

        cy.log(elelength)
        expect(elelength).to.be.equal(5)
    })
    cy.get('.mainpage-box-content').eq(3).then((txt)=>{

        var eletext = txt.text()
        cy.log(eletext)
    })
    cy.get('#n-uploadbtn>a[href="/wiki/Special:UploadWizard"]>span').then((txt)=>{

        var eletext2 = txt.text()
        cy.log(eletext2)
    })
    
      })
      
    })
  })
  
  