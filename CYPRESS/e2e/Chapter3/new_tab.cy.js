describe('example visit commande',()=>{
    it('visit google',()=>{

        cy.visit('http://127.0.0.1:5500/login.html')
        
        // ----------- login into home page-------------//
        cy.get('#iun').type("username")
        cy.get('.pass > input').type("password")
        cy.get('.btn > a').invoke('removeAttr','target').click()

        // -------------- assertion on home page-----------//
  
        cy.url().should('eq','http://127.0.0.1:5500/home.html')
        
        // cy.xpath("//h1[normalize-space()='All Department']").should('have.text','All Department')

        cy.go("back")

    })
    
})