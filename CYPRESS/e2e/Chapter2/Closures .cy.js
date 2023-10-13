describe('then',()=>{
    it('then exaple',()=>{
        cy.visit("https://www.google.com/")
        cy.get('.FPdoLc > center > .gNO89b').then(($sub)=>{
            const a = $sub
        })
    })
})