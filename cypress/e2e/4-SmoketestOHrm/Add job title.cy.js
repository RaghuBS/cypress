describe('add job title', () => {
    it('add job title with valid ', () => {
        cy.visit('/web/index.php/auth/login');
        cy.get('input[name="username"]', {
            timeout: 10000
        }).type("admin");

        cy.get('input[type="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.wait(15000);

        cy.contains('Admin').click();
        cy.contains('Job ').click();
        cy.contains('Job Titles').click();
        let randomtext = (Math.random() + 1).toString(36).substring(7);
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("System QA Assocate" + randomtext);
        cy.get('textarea[placeholder="Type description here"]').type("UAT Testing");
        cy.get('button[type="submit"]').click();
        cy.contains('Success').should('be.visible');
    })
})