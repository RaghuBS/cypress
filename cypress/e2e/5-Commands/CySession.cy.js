import login from "../../PageObjectModel/Example-1/loginDetails.po"
import login1 from '../../fixtures/SampleFile-1/login1.json'

describe('CySessions', () => {
    beforeEach(()=>{
        cy.session("login sessions",()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.username()).type(login1.username)
        cy.get(login.password()).type(login1.password)
        cy.get(login.submitbutton).click()

        
        })
    })
    it('add emp', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
      cy.get('input[name="firstName"]').type(firstname);
      cy.get('input[name="lastName"]').type(lastname);
      cy.get('button[type="submit"]').click();
      cy.wait(3000)
      cy.contains('Success').should('be.visible');
    })

     it('Validate add pay grade', ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade")
    let r = (Math.random() + 1).toString(36).substring(7);

    cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Grade 6"+r)

    cy.get('button[type="submit"]').click()
    cy.wait(3000)


  })


  })
  
  