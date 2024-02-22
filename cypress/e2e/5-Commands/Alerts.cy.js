describe('template spec', () => {

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })


    it('Simple Alerts example 1', () => {
        Cypress.on("uncaught:exception", () => {
          return false;
          });

    cy.contains('Click for JS Alert').click()
      cy.on('window:alert',(alert)=>{
        expect(alert).to.equal('I am a JS Alert')
          return true
      })

    })

    //or if don't want to verify text"I am a JS Alert"
    it('Simple Alerts example 2', () => {
        Cypress.on("uncaught:exception", () => {
          return false;
          });

    cy.contains('Click for JS Alert').click()
      cy.on('window:alert',()=>{
     
          return true
      })

    })
     // to click ok  //op: You clicked: Cancel

    it('confirm Alerts example 1', () => {  

    cy.contains('Click for JS Confirm').click()
      cy.on('window:confirm',(alert)=>{

        expect(alert).to.equal('I am a JS Confirm')
          return true
      })

    })
// to click cancel  //op:You clicked: Cancel
    it('confirm Alerts example 1', () => {  

        cy.contains('Click for JS Confirm').click()
          cy.on('window:confirm',(alert)=>{
    
            expect(alert).to.equal('I am a JS Confirm')
              return false
          })
    
        })

        it('promt Alerts example 1', () => {  

            cy.window().then(($win)=>{

                cy.stub($win,'prompt').returns("This is prompt alert")
                cy.contains("Click for JS Prompt").click()
            })
            })
  // to cancel prompt alert 
            it.only('promt Alerts example 2', () => {  

                cy.window().then(($win)=>{
    
                    cy.stub($win,'prompt').callsFake(()=> null)
                    cy.contains("Click for JS Prompt").click()
                })
                })
        
    
    
  })