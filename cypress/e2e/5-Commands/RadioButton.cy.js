describe('Radio Button', () => {
    it('Radio example 1', () => {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('input[type="radio"]').eq(1).check()

    })
    it.only('Radio example 1', () => {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('input[value="m"]').check().should('be.checked')
        cy.get(2000)
        cy.get('input[value="f"]').should('not.be.checked')
        cy.wait(2000)
        cy.get('input[value="f"]').click()

    })
  })