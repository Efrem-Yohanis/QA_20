describe('example visit commande',()=>{
    it.skip('visit google',()=>{
        cy.visit('https://www.google.com/')
    })
    it.only('local fiel',()=>{
         cy.visit("http://127.0.0.1:5500/Registration.html")
         cy.get('#fname').type('Efrem')
         cy.get('#lname').type('craft')
         cy.get('#email').type('efrem@craft.com')
         cy.get('#password').type('123456')
         cy.get('#re-password').type('123456')
         cy.get('#age').type(25)

         cy.get('[value="male"]').check()
         cy.get('[value="female"]').check()

         cy.get('#java').check()
         cy.get('#Python').uncheck()
         cy.get('#JavaScript').check()

         cy.get('#dep').select('DS')

         cy.get('a').click()

         cy.get('#email').type('efrem@craft.com')
         cy.get('#password').type('12345')
         cy.get('[href="home_page.html"]').click()
        })

    



})