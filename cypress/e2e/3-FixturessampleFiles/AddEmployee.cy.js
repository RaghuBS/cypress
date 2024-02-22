import login from'../../PageObjectModel/Example-1/loginDetails.po'
import addemployee from '../../PageObjectModel/Example-1/addemp.po'

//import AddEmpDetails from '../fixtures/AddEmpDetails'


 
const addempfixtures=[

{
    "name":"AddEmpDetails/emp1",
    "context":"1"
},
{
    "name":"AddEmpDetails/emp2",
    "context":"2"
},
{
    "name":"AddEmpDetails/emp3",
    "context":"3"
},
{
    "name":"AddEmpDetails/emp4",
    "context":"4"
},
{
    "name":"AddEmpDetails/emp5",
    "context":"5"
}
]

describe('add employee data', function() {
    addempfixtures.forEach((afixture) => {
      describe(afixture.context, () => {
        before(function() {
          cy.fixture(afixture.name).then((data) => {
            this.data = data;
          })
        })
  
        it('add multiple employees', function() {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

          cy.get(login.username()).type("admin")
          cy.get(login.password()).type("admin123")
          cy.get(login.submitbutton).click()  


          cy.contains(addemployee.PIM()).click()
          cy.contains(addemployee.AddEmployee()).click()
          cy.get(addemployee.firstname()).type(this.data.firstname)
          cy.get(addemployee.lastname()).type(this.data.lastname)
          //cy.get(addemployee.empid).type(this.data.empid)
          cy.get(addemployee.submit()).click()
        })
      })
    })
  })