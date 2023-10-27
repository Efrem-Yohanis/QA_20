describe('hidden element',()=>{
    it('example 1',()=>{
        cy.visit('https://www.amazon.com/')
          // this element was hidden  // by using invoke method show// UI => hover 
        cy.get('.nav-action-inner').invoke('show');

        // click
        cy.contains('Sign').click({force: true})
    })
    

})