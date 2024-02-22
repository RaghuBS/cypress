describe('Checkbox example', () => {
    it('check box scenario 1', () => {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
      cy.get('input[type="checkbox"]').check().should("be.checked")
     cy.wait(2000)
      cy.get('input[type="checkbox"]').uncheck().should("not.be.checked")

    })
    it('Multipl check box ', () => {
        cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')
        cy.get('input[type="checkbox"]').check().should("be.checked")
        cy.wait(2000)
        cy.get('input[type="checkbox"]').uncheck().should("not.be.checked")
        cy.wait(2000)
        cy.get('input[type="checkbox"]').check(["HTML","Javascript","CSS"]).should("be.checked")
        cy.wait(2000)
        cy.get('input[type="checkbox"]').uncheck(["HTML","Javascript","CSS"]).should("not.be.checked")

      })

      it.only('Multipl check box ', () => {
        cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')
        cy.wait(2000);

        for(let i=0; i<3; i++){
            cy.get('input[type="checkbox"]').eq(i).check().should("be.checked")
        }
        
      })
  })