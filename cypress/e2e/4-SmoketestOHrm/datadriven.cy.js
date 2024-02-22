const availablefixtures=[
    {
        "name":"datadriven/raghu",
        "context":"raghu"
    },
    {
        "name":"datadriven/raju",
        "context":"raju"
    },
    {
        "name":"datadriven/vilas",
        "context":"vilas"
    }
];



describe("verify addemployee functionality", function () {

    availablefixtures.forEach((afixture) => {
      describe(afixture.context, () => {
       
        before(function () {
          cy.fixture(afixture.name).then(function (data) {
            this.data = data;
          })
        })
  
        it('user already rigster',function () {
            cy.visit('https://shop.demoqa.com/my-account/')
            cy.get("#reg_username").type(this.data.username)
            cy.get("#reg_email").type(this.data.email)
            cy.get("#reg_password").type(this.data.Weakpassword)
        
            cy.get(".woocommerce-Button").should("be.disabled")
        
            //or
        
            cy.get(".woocommerce-Button").should("have.attr","disabled","disabled")
        
            // cy.get("#reg_password").clear()
            // cy.get("#reg_password").type(this.data.strongpassword)
        
            // or
            cy.get("#reg_password").clear().type(this.data.strongpassword)
            cy.get(".show-password-input").click()
            //cy.wait(10000)
        
            cy.get(".woocommerce-Button").click()
        
            cy.get("#username").should("have.attr","value",this.data.username)
            //or
            cy.get("#username").should("have.value",this.data.username)
        
            cy.contains("Error:").should("be.visible")
  
  
        })
  
      })
    })
  })