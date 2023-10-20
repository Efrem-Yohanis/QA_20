describe('text assertion',()=>{
    it('example 1',()=>{
         const expect_value = "Creating Learing Path To Meet Your It Training Need"
         //  let actual_value = ""
         cy.visit("http://127.0.0.1:5500/home.html")

         cy.get("#heading")
         .should('exist')
         .should('be.visible')
         .should('contain',expect_value)
        //  .should('include','Creating')
         .should('have.text',expect_value)

         cy.get("#heading").then((sub)=>{
            const actual_value = sub.text()
            expect(actual_value).to.eq(expect_value)
         })

       


    })
})