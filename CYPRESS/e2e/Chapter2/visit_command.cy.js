describe('example visit commande',()=>{
    it('visit google',()=>{
        cy.visit('https://www.google.com/')
    })
    it('local fiel',()=>{
        cy.visit("http://127.0.0.1:5500/home_page.html")
    })
})