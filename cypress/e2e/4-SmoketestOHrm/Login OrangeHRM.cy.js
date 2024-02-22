import login from '../../PageObjectModel/Example-1/loginDetails.po'
import login1 from '../../fixtures/SampleFile-1/login1.json'
describe('login OHRM spec', () => {
  

  var crds={

    username:"admin",
    password:"admin123"
  }

  before("login",()=>{
  
    cy.log("test start");
  
  })
  after("login",()=>{
  
    cy.log("test end");
  
  })
beforeEach("loginpage",()=>{
  
  cy.visit('/web/index.php/auth/login');
  cy.get(login.logo()).should ("be.visible")

})

afterEach("endmsg",()=>{
  
 cy.log("test ends ");

})

 
  it.only('Login with valid Username and password', () => {

    let logincrd ={

      username :"admin",
      password :"admin123"
    }
    let menu ={
      menu1: "Admin",
      menu2: "PIM",
      menu3: "Leave",
      menu4: "Dashboard"
  }
    


cy.xpath(login.username()).type(login1.username);
cy.get(login.password()).type(crds.password);
cy.get(login.submitbutton).click();

for (let item in menu)
cy.contains(menu[item]).should('be.visible')


  })


  it('Login with valid Username and invalid password', () => {
    

    
    login.loginScript(crds.username,crds.password)
    
      })
    

      it('Login with invalid Username and valid password', () => {
    

        
        login.loginScript("raghu","admin123")
        
          })
          it('Login with invalid Username and invalid password', () => {
    

            
            login.loginScript("raghu","123")
            
              })
})