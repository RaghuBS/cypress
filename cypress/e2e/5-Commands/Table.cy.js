describe('table', () => {
    it('counts and text', () => {
      cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices')
      cy.get('.dataTable>thead>tr>th').should('have.length',6)
      cy.get('.dataTable>tbody>tr').should('have.length',30)

      cy.xpath('//table[@class="dataTable"]/tbody/tr[3]/td[3]').then((text)=>{

      const eltext= text.text()
      cy.log(eltext)

      expect(eltext).to.equal('6645.70')
      })

cy.get('td').eq(6).should('contain.text','Axis Bank Ltd')
cy.xpath('//table[@class="dataTable"]/tbody/tr[3]').within(()=>{
    cy.get('td').eq(3).then((ele)=>{
        var text=ele.text()
        cy.log(text)
        
    })
    // cy.get('.dataTable >tbody').contains('Infosys Ltd').parent().parent().within(() => {

    //          cy.get('td').eq(3).then((ele) => {

    //                    cy.log("Prev price: "+ ele.text())
    // })
    // })

    cy.get('.dataTable> tbody > tr').each((rows) => {

        cy.wrap(rows).within((celldata) => {

            cy.log(celldata.text())
        })
    })
})
    })

    it.only('passes', () => {              // imprtant iq****
        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices')
        cy.get('.dataTable> tbody > tr').each((rows) => {

            cy.wrap(rows).within((celldata) => {
    
                cy.log(celldata.text())
            })
        })
      })
      
})