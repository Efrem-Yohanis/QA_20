describe('example visit commande',()=>{
    it('visit google',()=>{
        cy.visit('https://www.google.com/')
        // cy.get('.gLFyf')  => using class
        // cy.get('#APjFqb') => using id
        cy.get("[name='q']")  // using name attr
    })

    it('local fiel',()=>{
        cy.visit("http://127.0.0.1:5500/Registration.html")
        // cy.get('#fname')
        cy.get("[name='first_name']").eq(0)

        cy.get('#lname')
        cy.get('#re-password')
    })
})