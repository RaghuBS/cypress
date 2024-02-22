import login from "../../PageObjectModel/Example-1/loginDetails.po";

import dashbord from "../../PageObjectModel/Example-1/Dashbord.po";

describe('Add Emp details ', () => {
    it('Add emp ', () => {
      //cy.viewport("ipad-mini", "landscape");

  cy.login("admin","admin123") // custom comands without parameters 
  
  cy.addemplyee("raghu","BS")  // custom comands with parameters 
    })
  })