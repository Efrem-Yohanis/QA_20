describe('input tag',()=>{
    it('example',()=>{
        cy.visit('http://127.0.0.1:5500/registration.html')
        cy.get(':nth-child(2) > #iun').type('Efrem').should('have.value','Efrem')
        cy.get(':nth-child(3) > #iun').type('Craft').should('have.value','Craft')
        cy.get(':nth-child(4) > #iun').type('Efrem@craft.com').should('have.value','Efrem@craft.com')

       
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

        cy.get('#Regular').uncheck().should('not.be.checked')
        cy.get('#Speasal').check().should('be.checked')
    })

})

