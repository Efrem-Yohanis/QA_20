describe('example visit commande',()=>{
    it('visit google',()=>{
        cy.visit('http://127.0.0.1:5501/form.html')
        cy.get('#CountryS').select('Ethiopia').should('have.value','Ethiopia')
    })
    it.only('local fiel',()=>{
         cy.visit("https://www.wikipedia.org/")
         cy.get('#searchInput').type('ethio')           
         cy.get('.suggestion-title').each(($elem)=>{
            
                  if($elem.text() === 'Ethiopia')
                  {
                      $elem.click()
                  }
                  cy.get('.mw-page-title-main').should('have.text','Ethiopia')
         })

        })


})