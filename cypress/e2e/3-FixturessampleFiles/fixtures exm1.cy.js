import rigdata from '../../fixtures/SampleFile-1/rigdata.json'

describe('Fixture example', () => {
  it('user already rigster', () => {
    cy.visit('https://shop.demoqa.com/my-account/')
    cy.get("#reg_username").type(rigdata.username)
    cy.get("#reg_email").type(rigdata.email)
    cy.get("#reg_password").type(rigdata.Weakpassword)

    cy.get(".woocommerce-Button").should("be.disabled")

    //or

    cy.get(".woocommerce-Button").should("have.attr","disabled","disabled")

    // cy.get("#reg_password").clear()
    // cy.get("#reg_password").type(rigdata.strongpassword)

    // or
    cy.get("#reg_password").clear().type(rigdata.strongpassword)
    cy.get(".show-password-input").click
    cy.wait(10000)

    cy.get(".woocommerce-Button").click()

    cy.get("#username").should("have.attr","value",rigdata.username)
    //or
    cy.get("#username").should("have.value",rigdata.username)

    cy.contains("Error:").should("be.visible")


  })
})