describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=676742245123&hvpos=&hvnetw=g&hvrand=14579194852254271308&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007768&hvtargid=kwd-10573980&hydadcr=14453_2367553&gad_source=1')
      cy.get("#nav-link-accountList-nav-line-1").click()
      cy.get('#nav-flyout-ya-signin').click()
    }) 
    
  })
  
  