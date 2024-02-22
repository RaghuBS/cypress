import data1 from'../../PageObjectModel/Example-1/redifflogindata.po'

import redifdata from'../../fixtures/SampleFile-1/redifdata.json'

describe('Login to Rediff', () => {
    it('should log in with valid credentials', () => {
      
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")

        //cy.contains(data1.logo).should("be.visible")
        cy.get(data1.username()).type(redifdata.username);
        cy.get(data1.mailid()).type(redifdata.mailid);
        cy.get(data1.password()).type(redifdata.password);
        cy.get(data1.retypwpassword()).type(redifdata.retypwpassword);
        cy.get(data1.altermail()).type(redifdata.altermail);
        cy.get(data1.submit()).click();
        
    });
  });